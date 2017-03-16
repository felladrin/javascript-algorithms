function Deque() {
    this.items = [];
}

/**
 * @returns {object} item
 */
Deque.prototype.dequeueFront = function () {
    return this.items.splice(0, 1)[0];
};

/**
 * @param {object} item
 */
Deque.prototype.enqueueFront = function (item) {
    this.items.unshift(item);
};

/**
 * @returns {object} item
 */
Deque.prototype.dequeueBack = function () {
    return this.items.splice(this.items.length-1)[0];
};

/**
 * @param {object} item
 */
Deque.prototype.enqueueBack = function (item) {
    this.items[this.items.length] = item;
};


/**
 * @returns {object} item
 */
Deque.prototype.front = function () {
    return this.items[0];
};

/**
 * @returns {object} item
 */
Deque.prototype.back = function () {
    return this.items[this.items.length-1];
};

/**
 * @returns {number}
 */
Deque.prototype.size = function () {
    return this.items.length;
};

/**
 * @returns {boolean}
 */
Deque.prototype.isEmpty = function () {
    return this.items.length === 0;
};

module.exports = Deque;