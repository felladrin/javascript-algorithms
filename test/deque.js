"use strict";

const assert = require('chai').assert;
const Deque = require('../data-structures/deque');

describe('Deque', () => {
    let d = new Deque();

    it('should have 4 elements after adding earth (front), water (back), air (front), and fire (front)', () => {
        d.enqueueFront('earth');
        d.enqueueBack('water');
        d.enqueueFront('air');
        d.enqueueFront('fire');
        assert.equal(4, d.size());
    });

    it('should have fire as the front element', () => {
        assert.equal('fire', d.front());
    });

    it('should have water as the back element', () => {
        assert.equal('water', d.back());
    });

    it('should return fire when dequeueing front', () => {
        assert.equal('fire', d.dequeueFront());
    });

    it('should return water when dequeueing back', () => {
        assert.equal('water', d.dequeueBack());
    });

    it('should have air as the front element', () => {
        assert.equal('air', d.front());
    });

    it('should have isEmpty() returning false, as it is not empty yet', () => {
        assert.equal(false, d.isEmpty());
    });

    it('should return earth when dequeueing back', () => {
        assert.equal('earth', d.dequeueBack());
    });

    it('should still have air as the front element', () => {
        assert.equal('air', d.front());
    });

    it('should be 1-length element', () => {
        assert.equal(1, d.size());
    });

    it('should return air when dequeueing back', () => {
        assert.equal('air', d.dequeueBack());
    });

    it('should be empty then', () => {
        assert.equal(true, d.isEmpty());
    });
});