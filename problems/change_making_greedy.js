"use strict";

/**
 * The classic Change-Making Problem, using greedy algorithm.
 * @param {Number} money
 * @param {Array<Number>} coins
 * @returns {Array<Number>}
 */
function change(money, coins) {
    let change = new Array(coins.length);
    for (let i = 0; i < coins.length; i++) {
        change[i] = parseInt(money / coins[i]);
        money -= change[i] * coins[i];
    }
    return change;
}

module.exports = change;