"use strict";

const assert = require('chai').assert;
const Deque = require('../data-structures/deque');

describe('Deque', function () {
    let d = new Deque();

    it('should have 4 elements after adding earth (front), water (back), air (front), and fire (front)', function () {
        d.enqueueFront('earth');
        d.enqueueBack('water');
        d.enqueueFront('air');
        d.enqueueFront('fire');
        assert.equal(4, d.size());
    });

    it('should have fire as the front element', function () {
        assert.equal('fire', d.front());
    });

    it('should have water as the back element', function () {
        assert.equal('water', d.back());
    });

    it('should return fire when dequeueing front', function () {
        assert.equal('fire', d.dequeueFront());
    });

    it('should return water when dequeueing back', function () {
        assert.equal('water', d.dequeueBack());
    });

    it('should have air as the front element', function () {
        assert.equal('air', d.front());
    });

    it('should have isEmpty() returning false, as it is not empty yet', function () {
        assert.equal(false, d.isEmpty());
    });

    it('should return earth when dequeueing back', function () {
        assert.equal('earth', d.dequeueBack());
    });

    it('should still have air as the front element', function () {
        assert.equal('air', d.front());
    });

    it('should be 1-length element', function () {
        assert.equal(1, d.size());
    });

    it('should return air when dequeueing back', function () {
        assert.equal('air', d.dequeueBack());
    });

    it('should be empty then', function () {
        assert.equal(true, d.isEmpty());
    });
});