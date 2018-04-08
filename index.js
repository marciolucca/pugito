#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');
const liveServer = require('live-server');
const watch = require('watch');
const pug = require('pug');

const SRC = "src"
const SRC_DIR = SRC + '/';
const DIST_DIR = 'dist/';
const LIVE_SERVER_CONFIG = {
    port: 8080,
    host: '0.0.0.0',
    root: DIST_DIR,
    watch: [DIST_DIR],
    open: false,
    wait: 1000,
    logLevel: 2
};

const clean = () => {
    fs.removeSync(DIST_DIR);
}

const compile = (callback) => {
    fs.ensureDir(DIST_DIR);
    klawSync(SRC_DIR, { nodir: true }).forEach((item) => {
        var target = DIST_DIR + item.path.split(SRC)[1];
        var file = fs.readFile(item.path);
        if(!path.basename(item.path).includes('include.') && !path.basename(item.path).includes('template.')) {
            if (path.extname(item.path) === '.pug') {
                fs.ensureDirSync(path.dirname(target));
                fs.writeFileSync(target.replace('.pug', '.html'), pug.renderFile(item.path));
            } else {
                fs.copySync(item.path, target);
            }
        }
    });
};

const live = () => {
    watch.watchTree(SRC_DIR, { interval: 1 }, (f, curr, prev) => {
        compile();
    });
    liveServer.start(LIVE_SERVER_CONFIG);
}

const args = process.argv.slice(2);

if (args[0] === "clean") clean();
else if (args[0] === "compile") compile();
else if (args[0] === "live") live();