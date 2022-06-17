const fs = require("fs");
const { parse } = require("path");
const { message } = require("statuses");
const {
	pokemonClient,
} = require("/Users/User/monday-u-exercises/server/clients/pokemonClient");
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
		const fetchPokemon = todoInput.split(",");
		for (let i = 0; i < fetchPokemon.length; i++) {
			const searchNum = fetchPokemon[i];
			if (isNaN(searchNum)) {
				data = await itemManager.addTodo(searchNum);
			} else {
				data = await pokemonClient(searchNum);
				data = "catch " + data;
				data = await itemManager.addTodo(data);
			}
		}
		if (data) {
			return res.json(data);
		}
	} catch (error) {
		return res.json({ sucsess: true });
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

// constructor() {
// 		this.API_BASE = "https://pokeapi.co/api/v2";
// 	}

// 	async addPokePromise(name) {
// 		const url = `${this.API_BASE}/pokemon/${name}`;
// 		const res = await fetch(url);
// 		const data = await res.json();
// 		return data.name;
// 	}

// router.post.delete("/todo", async (req, res) => {
// 	let data = await itemManager.getAll();
// 	res.json(data);
// });

// 	let data = await itemManager.deleteTodo();
// 	if (data) {
// 		return res.send("sucsess");
// 	}
// 	res.send("faild");
// });

module.exports = router;

// const express = require('express');
// const emitted = require('events')
// const app = express();
// app.use(express.json());

// // Define your endpoints here (this is your "controller file")
// app.get("/", async (req, res) => {
// 	let data = await jediService.getAll();
// 	if (!data) data = [];
// 	res.status(200).json(data);
// });
