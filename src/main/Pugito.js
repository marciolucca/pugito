const FileScanner = require('./FileScanner');
const FileParser = require('./FileParser');
const fs = require('fs-extra');
const watch = require('watch');

class Pugito {

    static clean(targetDir) {
        fs.removeSync(targetDir);
    }

    static compile(sourceDir, targetDir, templatesPattern, includesPattern) {
        const fileScanner = new FileScanner(sourceDir, templatesPattern, includesPattern);
        const fileParser = new FileParser(sourceDir, targetDir);
        fileParser.copyFiles(fileScanner.getFilePathsToCopy());
        fileParser.renderFiles(fileScanner.getFilePathsToRender());
    };

    static live(sourceDir, targetDir, templatesPattern, includesPattern) {
        watch.watchTree(sourceDir, { interval: 1 }, (f, curr, prev) => {
            Pugito.compile(sourceDir, targetDir, templatesPattern, includesPattern);
        });
    }
}

module.exports = Pugito;