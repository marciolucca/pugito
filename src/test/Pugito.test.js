const Pugito = require("../main/Pugito.js");
const fs = require('fs-extra');
const path = require('path');

const DIR_SOURCE = 'src/test/resources/sample/';
const DIR_TARGET = 'target/test/Pugito/';
const NAME_PATTERN_TEMPLATE = 'template';
const NAME_PATTERN_INCLUDE = 'include';
const TARGET_PATH_INDEX_HTML = 'index.html';

beforeEach(() => fs.removeSync(DIR_TARGET));

test('compile', () => {
    new Pugito(DIR_SOURCE, DIR_TARGET, NAME_PATTERN_TEMPLATE, NAME_PATTERN_INCLUDE).compile();
    expect(fs.existsSync(path.resolve(path.join(DIR_TARGET, TARGET_PATH_INDEX_HTML)))).toBe(true);
});

afterAll(() => fs.removeSync(DIR_TARGET));