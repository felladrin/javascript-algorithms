function Queue() {
    this.items = [];
}

/**
 * @returns {object} item
 */
Queue.prototype.dequeue = function () {
    return this.items.splice(0, 1)[0];
};

/**
 * @param {object} item
 */
Queue.prototype.enqueue = function (item) {
    this.items[this.items.length] = item;
};

/**
 * @returns {object} item
 */
Queue.prototype.front = function () {
    return this.items[0];
};

/**
 * @returns {number}
 */
Queue.prototype.size = function () {
    return this.items.length;
};

/**
 * @returns {boolean}
 */
Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
};

module.exports = Queue;