"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function CombSort(vector) {
    const size = vector.length;
    const shrink_factor = 1.247330950103979;
    let gap = size;
    let finishedSorting = false;

    while ((gap > 1) || !finishedSorting) {
        if (gap > 1) {
            gap = parseInt(gap / shrink_factor);
        }

        finishedSorting = true;

        for (let i = 0; (gap + i) < size; i++) {
            let a = vector[i];
            let b = vector[i + gap];
            if (a - b > 0) {
                vector[i] = b;
                vector[i + gap] = a;
                finishedSorting = false;
            }
        }
    }
}

module.exports = CombSort;