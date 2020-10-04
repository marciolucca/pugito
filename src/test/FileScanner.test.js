const FileScanner = require('../main/FileScanner');
const path = require('path');

const DIR_SOURCE = 'src/test/resources/sample/';
const NAME_PATTERN_TEMPLATE = 'template';
const NAME_PATTERN_INCLUDE = 'include';
const PATH_MAIN_CSS = 'css/main.css';
const PATH_INDEX_PUG = 'index.pug';

const fileScanner = new FileScanner(DIR_SOURCE, NAME_PATTERN_TEMPLATE, NAME_PATTERN_INCLUDE)

test('get file paths to be copied', () => {
    const filePaths = fileScanner.getFilePathsToCopy();
    expect(filePaths.length).toBe(1);
    expect(path.resolve(path.join(DIR_SOURCE, filePaths[0])))
        .toEqual(path.resolve(path.join(DIR_SOURCE, PATH_MAIN_CSS)));
});

test('get file paths to be rendered', () => {
    const filePaths = fileScanner.getFilePathsToRender();
    expect(filePaths.length).toBe(1);
    expect(path.resolve(path.join(DIR_SOURCE, filePaths[0])))
        .toEqual(path.resolve(path.join(DIR_SOURCE, PATH_INDEX_PUG)));
});