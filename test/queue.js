"use strict";

const assert = require('assert');
const Queue = require('../data-structures/queue');

describe('Queue', function () {
    it("should pass this dummy test while the developer don't write a real one", function () {
        let q = new Queue();
        q.enqueue('one');
        q.enqueue('two');
        q.enqueue('three');

        assert.equal(3, q.size());
        assert.equal('one', q.front());
        assert.equal('one', q.dequeue());
        assert.equal('two', q.dequeue());
        assert.equal('three', q.front());
        assert.equal(false, q.isEmpty());
        assert.equal('three', q.dequeue());
        assert.equal(undefined, q.front());
        assert.equal(0, q.size());
        assert.equal(true, q.isEmpty());
    });
});