"use strict";

/**
 * @param min
 * @param max
 * @returns {Number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = getRandomInt;