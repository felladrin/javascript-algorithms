"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function JavascriptSort(vector) {
    vector.sort((a, b) => a - b);
}

module.exports = JavascriptSort;