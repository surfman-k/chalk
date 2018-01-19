'use strict';
var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
//console.log(message);

const ignoreChars = /[^!-~]/;

function rainbow(str, offset) {
	if (!str || str.length === 0) {
		return str;
	}

	const hueStep = 360 / str.replace(ignoreChars, '').length;

	let hue = offset % 360;
	const chars = [];
	for (const c of str) {
		if (c.match(ignoreChars)) {
			chars.push(c);
		} else {
			chars.push(chalk.hsl(hue, 100, 50)(c));
			hue = (hue + hueStep) % 360;
		}
	}

	return chars.join('');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function animateString(str) {
	console.log();
	for (let i = 0; i < 360 * 5; i++) {
		console.log('\u001B[1F\u001B[G ', rainbow(str, i));
	}
}

console.log();
animateString('Hellooooooooooooo! <3' );
console.log(chalk.yellow("Yellllloooooooooo! :)"));