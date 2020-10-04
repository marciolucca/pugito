const fs = require('fs-extra');
const path = require('path');
const pug = require('pug');

class FileParser {

    constructor(sourceDir, targetDir) {
        this.sourceDir = sourceDir;
        this.targetDir = targetDir;
    }

    copyFiles(filePaths) {
        filePaths.forEach(filePath => {
            fs.ensureDirSync(path.join(this.targetDir, path.dirname(filePath)));
            fs.copyFileSync(path.join(this.sourceDir, filePath), path.join(this.targetDir, filePath));
        });
    }

    renderFiles(filePaths) {
        filePaths.forEach(filePath => {
            fs.ensureDirSync(path.join(this.targetDir, path.dirname(filePath)));
            fs.writeFileSync(
                path.join(this.targetDir, filePath).replace('.pug', '.html'),
                pug.renderFile(path.join(this.sourceDir, filePath)));
        });
    }
}

module.exports = FileParser;