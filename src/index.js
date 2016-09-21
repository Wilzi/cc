require('babel-core/register');
require("babel-polyfill");
const _ = require("underscore");

const countryData = require('./../util/country-data');

function find(opts) {
    if (!_.isEmpty(opts) && _.isObject(opts)) {
        return _.findWhere(countryData, opts);
    } else {
        return undefined;
    }
}

module.exports = {
    find: find,
    countries: countryData
};