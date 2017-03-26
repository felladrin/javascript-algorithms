"use strict";

const assert = require('chai').assert;
const JavascriptSort = require('../sorting/javascript_sort');
const getRandomIntArray = require('../helpers/get_random_int_array');
const cloneArray = require('../helpers/clone_array');

let sortingAlgorithms = [
    require('../sorting/bubble_sort'),
    require('../sorting/bucket_sort'),
];

sortingAlgorithms.forEach(function (sortingAlgorithm) {
    describe(sortingAlgorithm.name, function () {
        getRandomIntArray(5, 8, 64).forEach(function (length) {
            let vector = getRandomIntArray(length, 1, 100);
            it("should correctly sort " + vector.toString(), function () {
                let expected = cloneArray(vector);
                JavascriptSort(expected);

                let actual = cloneArray(vector);
                sortingAlgorithm(actual);

                assert.deepEqual(expected, actual);
            });
        });
    });
});

