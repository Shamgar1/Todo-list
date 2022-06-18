const fs = require("fs");
const { parse } = require("path");
const { message } = require("statuses");
// const getPokimonNum = require("/Users/User/monday-u-exercises/server/clients/pokemonClient");
const pokemonClient = require("/Users/User/monday-u-exercises/server/clients/pokemonClient");
const express = require("express"),
	axios = require("axios").default,
	router = express.Router(),
	itemManager = require("../services/itemManager");

router.use(express.urlencoded({ extended: true }));
router.get("/todo", async (req, res) => {
	let data = await itemManager.getAll();
	res.json(data);
});

router.post("/todo", async (req, res) => {
	try {
		let { todoInput } = req.body;
		let data = false;
		let fetchPokemon = todoInput.split(",");
		for (let i = 0; i < fetchPokemon.length; i++) {
			const searchNum = fetchPokemon[i];
			if (!isNaN(searchNum)) {
				// console.log(pokemonClient);
				let poke = await pokemonClient(searchNum);
				data = "catch " + poke;
				data = await itemManager.addTodo(data);
			} else {
				data = await itemManager.addTodo(searchNum);
			}
		}
		if (data) {
			return res.json(data);
		}
	} catch (error) {
		return error;
	}
});

router.delete("/todo/:id", async (req, res) => {
	let todoId = Number.parseInt(req.params.id);
	if (isNaN(todoId))
		return res.status(400).json({
			status: 400,
			error: "wrong parameters",
		});
	const data = await itemManager.deleteTodo(todoId);
	res.status(200).json(data);
});
module.exports = router;
