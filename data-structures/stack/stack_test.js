var Stack = require('./stack');

var s = new Stack();
s.push('one');
s.push('two');
s.push('three');

console.log(s.size());
console.log(s.top());
console.log(s.toString());
console.log(s.pop());
console.log(s.pop());
console.log(s.top());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.top());
console.log(s.size());
console.log(s.isEmpty());
console.log(s.toString());