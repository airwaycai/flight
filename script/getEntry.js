const glob = require('glob');

module.exports = function(src) {
    return glob.sync(src);
};
