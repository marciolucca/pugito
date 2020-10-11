#!/usr/bin/env node

const program = require('commander');
const Pugito = require('./Pugito');

program.version('1.0.2')
    .description('Simple tool to generate static sites using PugJS');

program.command('clean')
    .action(options => Pugito.clean(options.dist))
    .description('Deletes all content on destination path')
    .option('-d, --dist [path]', 'Destination path', 'dist');

program.command('compile')
    .action((options) => {
        if (options.live) Pugito.live(options.src, options.dist, options.template, options.include);
        else Pugito.compile(options.src, options.dist, options.template, options.include);
    })
    .description('Scans source path and generates content into destination path')
    .option('-l, --live', 'Watches source path for live compilation', false)
    .option('-s, --src <path>', 'Source path', 'src')
    .option('-d, --dist <path>', 'Destination path', 'dist')
    .option('-t, --template <name>', 'What the name for a template file should contain', 'template')
    .option('-i, --include <name>', 'What the name for an include/partial file should contain', 'include');

program.parse(process.argv);
