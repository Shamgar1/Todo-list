#! /usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import { Command } from "commander";
import { log } from "console";
// import response from "./pokemonClient";
import pokemonClient from "./pokemonClient.js";
const program = new Command();
const path = "log.txt";
let main = new pokemonClient();

program
	.command("add")
	.description("Add a new to-do")
	.argument("<string>", "first operand")
	.action(async (data) => {
		if (!isNaN(data)) {
			// is a number
			const response = await main.addPokePromise(data);
			fs.appendFile(path, response + "\r\n", (err) => {
				if (err) throw err;
				console.log(chalk.blue("New todo added successfully"));
			});
		} else {
			// not a number
			fs.appendFile(path, data + "\r\n", (err) => {
				if (err) throw err;
				console.log(chalk.blue("New todo added successfully"));
			});
			console.log(data + " is not a number");
		}
	});

program
	.command("get")
	.description("Show all the items on the to-do list")
	.action(async () => {
		fs.readFile(path, (err, data) => {
			if (err) throw err;
			console.log(chalk.green("The to-do list:  " + data));
		});
	});

program
	.command("delete")
	.description("delete a specific to-do item")
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
				console.log(chalk.red("The to-do have been removed."));
			});
		});
	});
program.parse();
