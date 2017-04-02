"use strict";

const sort = require('./javascript_sort');

/**
 * @param {Array} vector
 * @constructor
 */
function BucketSort(vector) {
    const totalBuckets = Math.max(Math.floor(Math.sqrt(vector.length)), 2);
    const buckets = new Array(totalBuckets).fill(null).map(() => []);
    let i = 0;

    vector.forEach(element => {
        for (i = (totalBuckets - 1); i >= 0; i--) {
            if (element >= i * totalBuckets) {
                buckets[i].push(element);
                break;
            }
        }
    });

    i = 0;

    buckets.forEach(bucket => {
        if (bucket.length) {
            sort(bucket);
            bucket.forEach(element => {
                vector[i++] = element;
            });
        }
    });
}

module.exports = BucketSort;