var Deque = require('./deque');

var d = new Deque();
d.enqueueFront('two');
d.enqueueBack('one');
d.enqueueFront('three');

console.log(d.size());
console.log(d.front());
console.log(d.back());
console.log(d.dequeueBack());
console.log(d.dequeueFront());
console.log(d.front());
console.log(d.isEmpty());
console.log(d.dequeueBack());
console.log(d.front());
console.log(d.size());
console.log(d.isEmpty());