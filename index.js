console.log(123);
fetch('https://randomuser.me/api/')
.then((...args) => console.log('args', args))
console.log(456);
