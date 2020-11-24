// Shows single-threaded nature of JS
console.log('I happen first!');
alert('Hi There!');
console.log('I happen second');

// Since the above presents a problem. We can pass it to a setTimeout as a callback

console.log('I happen first!');
setTimeout(() => {
	console.log('I come last');
}, 3000);

console.log('I happen second');

// Why does the above happen? How does JS keep track of 3s while also running the code below the setTimeout? THE BROWSER DOES THE WORK

// JS is not the same as your browser. The browser itself is capable of doing its own stuff. Stuff that JS cannot do.
