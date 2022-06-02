#! /usr/bin/env node
const fs = require("fs");

const program = require("commander");
const path = "normalStdout.txt";

program
	.command("add")
	.description("Add a new to-do")
	.argument("<string>", "first operand")
	.action((input) => {
		let data = input;

		fs.appendFile(path, data + "\r\n", (err) => {
			if (err) throw err;
			console.log("New todo added successfully");
		});
	});

program
	.command("get")
	.description("get the to-do list")
	.action(() => {
		fs.readFile(path, (err, data) => {
			if (err) throw err;
			console.log("The to-do list:  " + data);
		});
	});

program
	.command("delete")
	.description("delete to-do")
	.argument("<number>", "first operand")
	.action((input) => {
		fs.readFile(path, (err, data) => {
			if (err) throw err;

			data = data
				.toString()
				.split("\r\n")
				.filter((val, idx) => input.indexOf(idx) === -1)
				.join("\r\n")
				.toString();
			fs.writeFile(path, data, "utf8", function (err) {
				if (err) throw err;
				console.log("The to-do have been removed.");
			});
		});
	});
program.parse();
