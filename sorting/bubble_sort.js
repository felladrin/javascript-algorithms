"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function BubbleSort(vector) {
    let lastIndex = vector.length - 1;

    for (let j = 0; j < lastIndex; j++) {
        let finishedSorting = true;

        for (let i = 0; i < lastIndex; i++) {
            if (vector[i + 1] < vector[i]) {
                const holder = vector[i];
                vector[i] = vector[i + 1];
                vector[i + 1] = holder;
                finishedSorting = false;
            }
        }

        if (finishedSorting) {
            break;
        }
    }
}

module.exports = BubbleSort;