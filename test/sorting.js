"use strict";

const assert = require('chai').assert;
const JavascriptSort = require('../sorting/javascript_sort');
const getRandomIntArray = require('../helpers/get_random_int_array');
const cloneArray = require('../helpers/clone_array');
const sortingAlgorithms = require('require-all')({dirname: __dirname + '/../sorting'});

Object.keys(sortingAlgorithms).forEach(key => {
    let sortingAlgorithm = sortingAlgorithms[key];
    describe(sortingAlgorithm.name, () => {
        getRandomIntArray(5, 8, 64).forEach(length => {
            let vector = getRandomIntArray(length, 1, 100);
            it("should correctly sort " + vector.toString(), () => {
                let expected = cloneArray(vector);
                JavascriptSort(expected);

                let actual = cloneArray(vector);
                sortingAlgorithm(actual);

                assert.deepEqual(expected, actual);
            });
        });
    });
});

