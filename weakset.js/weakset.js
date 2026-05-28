const visited = new WeakSet();
let user = { name: 'Alice' };
visited.add(user);
console.log(visited.has(user)); // true
user = null; // eligible for GC