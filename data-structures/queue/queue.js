function Queue() {
    this.length = 0;
    this.items = [];
}

/**
 * @param {object} item The item to be put at the end of the queue.
 */
Queue.prototype.enqueue = function (item) {
    this.items[this.length++] = item;
};

/**
 * @returns {object} item The item which is head of the queue.
 */
Queue.prototype.front = function () {
    return this.items[0];
};

/**
 * @returns {object} item The deleted item, which was previous head of the queue.
 */
Queue.prototype.dequeue = function () {
    var deletedFront = this.front();
    var reindexItems = [];
    for (var i = 1; i < this.length; i++) {
        reindexItems[i - 1] = this.items[i];
    }
    this.items = reindexItems;
    this.length--;
    return deletedFront;
};

/**
 * @returns {number} The current number of items in the queue.
 */
Queue.prototype.size = function () {
    return this.length;
};

/**
 * @returns {boolean} Whether the queue is empty or not.
 */
Queue.prototype.isEmpty = function () {
    return (this.length === 0);
};

/**
 * @returns {string} The string representation of the queue.
 */
Queue.prototype.toString = function () {
    var result = '[';
    var lastItemKey = this.length - 1;
    for (var i = 0; i < lastItemKey; i++) {
        result += this.items[i] + ', ';
    }
    if (this.items[lastItemKey]) {
        result += this.items[lastItemKey];
    }
    result += ']';
    return result;
};

module.exports = Queue;