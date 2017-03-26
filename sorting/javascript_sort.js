"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function JavascriptSort(vector) {
    vector.sort(function (a, b) {
        return a - b;
    });
}

module.exports = JavascriptSort;