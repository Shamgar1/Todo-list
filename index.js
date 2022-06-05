#! /usr/bin/env node
import chalk from "chalk";
import fs from "fs";

// import { response } from "../pokemonClient";
// import { addPoke } from "../pokemonClient";
// const response = require("./appList/pokemonClient.js");
// const addPoke = require("./appList/pokemonClient.js");
// const main = require("../main");
import { Command } from "commander";
import { log } from "console";
const path = "log.txt";
// const addPokeAgain = new addPoke();

const program = new Command();

program
	.command("add")
	.description("Add a new to-do")
	.argument("<string>", "first operand")
	.action(async (data) => {
		fs.appendFile(path, data + "\r\n", (err) => {
			if (err) throw err;
			console.log(chalk.blue("New todo added successfully"));
		});
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
