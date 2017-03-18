var Stack = require('./stack');

var q = new Stack();
q.push('one');
q.push('two');
q.push('three');

console.log(q.size());
console.log(q.top());
console.log(q.pop());
console.log(q.pop());
console.log(q.top());
console.log(q.isEmpty());
console.log(q.pop());
console.log(q.top());
console.log(q.size());
console.log(q.isEmpty());