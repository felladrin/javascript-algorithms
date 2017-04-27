"use strict";

const assert = require('chai').assert;
const change = require('../problems/change_making_greedy');

describe('Change-Making Problem', () => {
    it("change(289, [100, 50, 25, 10, 5, 1]) = [2, 1, 1, 1, 0, 4]", () => {
        assert.deepEqual([2, 1, 1, 1, 0, 4], change(289, [100, 50, 25, 10, 5, 1]));
    });

    it("change(20, [100, 50, 24, 12, 5, 1]) = [0, 0, 0, 1, 1, 3]", () => {
        assert.deepEqual([0, 0, 0, 1, 1, 3], change(20, [100, 50, 24, 12, 5, 1]));
    });
});