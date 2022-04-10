const knex = require('knex');

const config = require('../knexfile');

module.exports = knex(config.development);
// module.exports = knex(configs[process.env.NODE_ENV])