function Stack() {
    this.items = [];
}

/**
 * @returns {object} item
 */
Stack.prototype.pop = function () {
    return this.items.splice(0, 1)[0];
};

/**
 * @param {object} item
 */
Stack.prototype.push = function (item) {
    this.items.unshift(item);
};

/**
 * @returns {object} item
 */
Stack.prototype.top = function () {
    return this.items[0];
};

/**
 * @returns {number}
 */
Stack.prototype.size = function () {
    return this.items.length;
};

/**
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

module.exports = Stack;