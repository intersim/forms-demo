// // Higher order function: function that returns a function

// function makeBulldog (puppyName) {
// 	const foo = `${puppyName} is a bulldog`;
// 	return function innerFunction() {
// 		console.log(foo);
// 	};
// }

// const bulldogFunction = makeBulldog('Porkchop');
// bulldogFunction(); // Porkchop is a bulldog

// Decorator function: function that takes a function as an argument, then returns that function

function sayPuppyName(puppyName) {
	console.log(`Hi, my name is ${puppyName}`);
}

function makeBulldog(innerFunction) {
	return function (puppyName) {
		innerFunction(puppyName);
		console.log('I am a bulldog');
	}
}

const sayBulldogName = makeBulldog(sayPuppyName);

sayBulldogName('Porkchop');

/**
 * Hi, my name is Porkchop
 * I am a bulldog
**/
