const path = require('path');
const klawSync = require('klaw-sync');

class FileScanner {

    constructor(sourceDir, templateNamePattern, includeNamePattern) {
        this.sourcePath = path.resolve(sourceDir);
        this.templateNamePattern = templateNamePattern;
        this.includeNamePattern = includeNamePattern;
    }

    getFilePathsToCopy() {
        return this._getFilePaths()
            .filter(itemPath => path.extname(itemPath) != '.pug');
    }

    getFilePathsToRender() {
        return this._getFilePaths()
            .filter(filePath => path.extname(filePath) === '.pug')
            .filter(filePath => !path.basename(filePath).includes(this.templateNamePattern))
            .filter(filePath => !path.basename(filePath).includes(this.includeNamePattern));
    }

    _getFilePaths() {
        return klawSync(this.sourcePath, { nodir: true })
            .map(item => item.path)
            .map(filePath => filePath.split(path.resolve(this.sourcePath))[1]);
    }
}

module.exports = FileScanner;