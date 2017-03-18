var assert = require('assert');
var describe = require("mocha").describe;
var it = require("mocha").it;
var Stack = require('../data-structures/stack');

describe('Stack', function () {
    it("should pass this dummy test while de developer don't write a real one", function () {
        var s = new Stack();
        s.push('one');
        s.push('two');
        s.push('three');

        assert.equal(3, s.size());
        assert.equal('three', s.top());
        assert.equal('[one, two, three]', s.toString());
        assert.equal('three', s.pop());
        assert.equal('two', s.pop());
        assert.equal('one', s.top());
        assert.equal(false, s.isEmpty());
        assert.equal('one', s.pop());
        assert.equal(undefined, s.top());
        assert.equal(0, s.size());
        assert.equal(true, s.isEmpty());
        assert.equal('[]', s.toString());
    });
});