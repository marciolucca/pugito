#!/usr/bin/env node

const program = require('commander');
const Pugito = require('./Pugito');

program
    .version('0.1.0')
    .option('clean', 'Deletes all content on destination path')
    .option('compile', 'Scans source path and generates content into destination path')
    .option('live', 'Watches source path for live compilation')
    .option('-s, --src [path]', 'Source path', 'src')
    .option('-d, --dist [path]', 'Destination path', 'dist')
    .option('-p, --port [number]', 'Port for running in localhost', '8080')
    .option('-t, --template [name]', 'What the name for a template file should contain', 'template')
    .option('-i, --include [name]', 'What the name for an include/partial file should contain', 'include')
    .parse(process.argv);

const pugito = new Pugito(
    program.src,
    program.dist,
    program.template,
    program.include
);

if (program.clean) pugito.clean();
else if (program.compile) pugito.compile();
else if (program.live) pugito.live();
else program.outputHelp();