const FileParser = require('../main/FileParser');
const fs = require('fs-extra');
const path = require('path');

const DIR_SOURCE = 'src/test/resources/sample/';
const DIR_TARGET = 'target/test/FileParser/';
const PATH_MAIN_CSS = 'css/main.css';
const SOURCE_PATH_INDEX_PUG = 'index.pug';
const TARGET_PATH_INDEX_HTML = 'index.html';

const fileParser = new FileParser(DIR_SOURCE, DIR_TARGET);

beforeEach(() => fs.removeSync(DIR_TARGET));

test('copy files to target dir', () => {
    fileParser.copyFiles(new Array().concat(PATH_MAIN_CSS));
    expect(fs.existsSync(path.resolve(path.join(DIR_TARGET, PATH_MAIN_CSS)))).toBe(true);
});

test('render files to target dir', () => {
    fileParser.renderFiles(new Array().concat(SOURCE_PATH_INDEX_PUG));
    expect(fs.existsSync(path.resolve(path.join(DIR_TARGET, TARGET_PATH_INDEX_HTML)))).toBe(true);
});

afterAll(() => fs.removeSync(DIR_TARGET));