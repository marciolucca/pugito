const FileScanner = require('./FileScanner');
const FileParser = require('./FileParser');
const fs = require('fs-extra');
const watch = require('watch');

class Pugito {

    constructor(sourceDir, targetDir, templatesPattern, includesPattern) {
        this.sourceDir = sourceDir;
        this.targetDir = targetDir;
        this.fileScanner = new FileScanner(sourceDir, templatesPattern, includesPattern);
        this.fileParser = new FileParser(sourceDir, targetDir);
    }

    clean() {
        fs.removeSync(this.targetDir);
    }

    compile() {
        this.fileParser.copyFiles(this.fileScanner.getFilePathsToCopy());
        this.fileParser.renderFiles(this.fileScanner.getFilePathsToRender());
    };

    live() {
        watch.watchTree(this.sourceDir, { interval: 1 }, (f, curr, prev) => {
            this.compile();
        });
    }
}

module.exports = Pugito;