"use strict";

const getRandomInt = require('./get_radom_int');

/**
 * @param length
 * @param min
 * @param max
 * @returns {Number[]}
 */
function getRandomIntArray(length, min, max) {
    return new Array(length).fill(0).map(() => getRandomInt(min, max));
}

module.exports = getRandomIntArray;