#!/usr/bin/env node

const program = require('commander');
const Pugito = require('./Pugito');

program.version('1.0.3')
    .description('Simple tool to generate static sites using PugJS.');

program.command('clean')
    .action(options => Pugito.clean(options.dist))
    .description('deletes all content on destination path')
    .option('-d, --dist <path>', 'Destination path', 'dist');

program.command('compile')
    .action((options) => {
        if (options.live) Pugito.live(options.src, options.dist, options.template, options.include);
        else Pugito.compile(options.src, options.dist, options.template, options.include);
    })
    .description('Scans source path and generates content into destination path')
    .option('-l, --live', 'watches source path for live compilation', false)
    .option('-s, --src <path>', 'wource path', 'src')
    .option('-d, --dist <path>', 'destination path', 'dist')
    .option('-t, --template <name>', 'what the name for a template file should contain', 'template')
    .option('-i, --include <name>', 'what the name for an include/partial file should contain', 'include');

program.parse(process.argv);
