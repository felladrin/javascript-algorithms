"use strict";

function Deque() {
    this.length = 0;
    this.items = [];
}

/**
 * @param {object} item The item to be put at the beginning of the deque.
 */
Deque.prototype.enqueueFront = function (item) {
    const reindexItems = [];
    reindexItems[0] = item;
    for (let i = 0; i < this.length; i++) {
        reindexItems[i + 1] = this.items[i];
    }
    this.items = reindexItems;
    this.length++;
};

/**
 * @param {object} item The item to be put at the end of the deque.
 */
Deque.prototype.enqueueBack = function (item) {
    this.items[this.length++] = item;
};

/**
 * @returns {object} item The deleted item, which was previous at the beginning of the deque.
 */
Deque.prototype.dequeueFront = function () {
    const deletedFront = this.front();
    const reindexItems = [];
    for (let i = 1; i < this.length; i++) {
        reindexItems[i - 1] = this.items[i];
    }
    this.items = reindexItems;
    this.length--;
    return deletedFront;
};

/**
 * @returns {object} item The deleted item, which was previous at the end of the deque.
 */
Deque.prototype.dequeueBack = function () {
    const deletedBack = this.back();
    const reindexItems = [];
    for (let i = 0; i < (this.length - 1); i++) {
        reindexItems[i] = this.items[i];
    }
    this.items = reindexItems;
    this.length--;
    return deletedBack;
};

/**
 * @returns {object} item The item which is at the beginning of the deque.
 */
Deque.prototype.front = function () {
    return this.items[0];
};

/**
 * @returns {object} item The item which is at the end of the deque.
 */
Deque.prototype.back = function () {
    return this.items[this.length - 1];
};

/**
 * @returns {number} The current number of items in the deque.
 */
Deque.prototype.size = function () {
    return this.length;
};

/**
 * @returns {boolean} Whether the deque is empty or not.
 */
Deque.prototype.isEmpty = function () {
    return (this.length === 0);
};

/**
 * @returns {string} The string representation of the deque.
 */
Deque.prototype.toString = function () {
    let result = '[';
    const lastItemKey = this.length - 1;
    for (let i = 0; i < lastItemKey; i++) {
        result += this.items[i] + ', ';
    }
    if (this.items[lastItemKey]) {
        result += this.items[lastItemKey];
    }
    result += ']';
    return result;
};

module.exports = Deque;