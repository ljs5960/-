if (process.env.NODE_ENV === 'production') {
    module.exports = require('../../server/config/prod');
} else {
    module.exports = require('../../server/config/dev');
}