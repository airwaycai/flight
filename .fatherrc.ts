const path = require('path');

const getEntry = require('./script/getEntry');

const cwd = process.cwd();
const entry = getEntry(path.join(cwd, 'src/*.js'));
const entrysPath =
    Array.isArray(entry) &&
    entry.map(item => {
        return item.substring(item.indexOf('src/'));
    });

module.exports = {
    entry: entrysPath,
    esm: 'rollup',
    cjs: 'rollup',
    umd: true,
};
