var Queue = require('./queue');

var q = new Queue();
q.enqueue('one');
q.enqueue('two');
q.enqueue('three');

console.log(q.size());
console.log(q.front());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.front());
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());