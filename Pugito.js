const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');
const watch = require('watch');
const pug = require('pug');

class Pugito {

    constructor(srcPath, distPath, templatesPattern, includesPattern) {
        this.srcPath = srcPath;
        this.distPath = distPath;
        this.templatesPattern = templatesPattern;
        this.includesPattern = includesPattern;
    }

    clean() {
        fs.removeSync(this.distPath);
    }

    compile() {
        fs.ensureDirSync(this.distPath);
        klawSync(this.srcPath, { nodir: true }).forEach((item) => {
            var target = this.distPath + item.path.split(this.srcPath)[1];
            if (!path.basename(item.path).includes(this.includesPattern)
                && !path.basename(item.path).includes(this.templatesPattern)) {
                if (path.extname(item.path) === '.pug') {
                    fs.ensureDirSync(path.dirname(target));
                    fs.writeFileSync(target.replace('.pug', '.html'), pug.renderFile(item.path));
                } else {
                    fs.copySync(item.path, target);
                }
            }
        });
    };

    live() {
        watch.watchTree(this.srcPath, { interval: 1 }, (f, curr, prev) => {
            this.compile();
        });
    }
}

module.exports = Pugito;