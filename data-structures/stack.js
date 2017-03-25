"use strict";

function Stack() {
    this.length = 0;
    this.items = [];
}

/**
 * @param {object} item The item to be put on top of the stack.
 */
Stack.prototype.push = function (item) {
    this.items[this.length++] = item;
};

/**
 * @returns {object} The item which is on top of the stack.
 */
Stack.prototype.top = function () {
    return this.items[this.length - 1];
};

/**
 * @returns {object} The deleted item, which was previous on top of the stack.
 */
Stack.prototype.pop = function () {
    const deletedTop = this.top();
    const reindexItems = [];
    for (let i = 0; i < (this.length - 1); i++) {
        reindexItems[i] = this.items[i];
    }
    this.items = reindexItems;
    this.length--;
    return deletedTop;
};

/**
 * @returns {number} The current number of items on the stack.
 */
Stack.prototype.size = function () {
    return this.length;
};

/**
 * @returns {boolean} Whether the stack is empty or not.
 */
Stack.prototype.isEmpty = function () {
    return (this.length === 0);
};

/**
 * @returns {string} The string representation of the stack.
 */
Stack.prototype.toString = function () {
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

module.exports = Stack;