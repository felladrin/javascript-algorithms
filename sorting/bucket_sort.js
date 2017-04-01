"use strict";

const sort = require('./javascript_sort');

/**
 * @param {Array} vector
 * @constructor
 */
function BucketSort(vector) {
    const bucketsFactor = 5;
    const totalBuckets = Math.max(parseInt(vector.length / bucketsFactor), 1);
    const buckets = new Array(totalBuckets).fill(null).map(() => []);

    vector.forEach(element => {
        for (let i = (totalBuckets - 1); i >= 0; i--) {
            if (element >= i * bucketsFactor) {
                buckets[i].push(element);
                break;
            }
        }
    });

    let j = 0;

    buckets.forEach(bucket => {
        sort(bucket);
        bucket.forEach(element => {
            vector[j++] = element;
        });
    });
}

module.exports = BucketSort;