"use strict";

/**
 * @param {Array} vector
 * @constructor
 */
function BubbleSort(vector) {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        vector.forEach((currentElement, i) => {
            let nextElement = vector[i + 1];

            if (nextElement < currentElement) {
                vector[i] = nextElement;
                vector[i + 1] = currentElement;
                isSorted = false;
            }
        });
    }
}

module.exports = BubbleSort;