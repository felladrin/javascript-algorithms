function Stack() {
    this.count = 0;
    this.items = [];
}

/**
 * @param {object} item The item to be put on top of the stack.
 */
Stack.prototype.push = function (item) {
    this.items[this.count] = item;
    this.count++;
};

/**
 * @returns {object} The item which is on top of the stack.
 */
Stack.prototype.top = function () {
    return this.items[this.count - 1];
};

/**
 * @returns {object} The deleted item, which was previous on top of the stack.
 */
Stack.prototype.pop = function () {
    var deletedTop = this.top();
    var reindexItems = [];
    for (var i = 0; i < (this.count - 1); i++) {
        reindexItems[i] = this.items[i];
    }
    this.items = reindexItems;
    this.count--;
    return deletedTop;
};

/**
 * @returns {number} The current number of items on the stack.
 */
Stack.prototype.size = function () {
    return this.count;
};

/**
 * @returns {boolean} Whether the stack is empty or not.
 */
Stack.prototype.isEmpty = function () {
    return (this.count === 0);
};

/**
 * @returns {string} The string representation of the stack.
 */
Stack.prototype.toString = function () {
    var result = '[';
    for (var i = 0; i < (this.count - 1); i++) {
        result += this.items[i] + ', ';
    }
    if (this.items[this.count - 1]) {
        result += this.items[this.count - 1];
    }
    result += ']';
    return result;
};

module.exports = Stack;