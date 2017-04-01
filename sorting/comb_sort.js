"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function CombSort(vector) {
    const shrinkFactor = 1.3;
    let gap = vector.length;
    let isSorted = false;

    while (!isSorted || gap > 1) {
        isSorted = true;

        if (gap > 1) {
            gap = parseInt(gap / shrinkFactor);
        }

        for (let i = 0; i + gap < vector.length; i++) {
            let currentElement = vector[i];
            let nextElement = vector[i + gap];

            if (nextElement < currentElement) {
                vector[i] = nextElement;
                vector[i + gap] = currentElement;
                isSorted = false;
            }
        }
    }
}

module.exports = CombSort;