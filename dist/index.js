"use strict";

require('babel-core/register');
require("babel-polyfill");
var _ = require("underscore");

var countryData = require('./../util/country-data');

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
