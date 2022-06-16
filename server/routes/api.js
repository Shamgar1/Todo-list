const fs = require("fs");
const { message } = require("statuses");
const express = require("express"),
	axios = require("axios").default,
	router = express.Router(),
	itemManager = require("../services/itemManager");
// bodyparser = require("body-parser");
// import { getAll } from "../services/itemManager";

// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get("/todo", async (req, res) => {
	let data = await itemManager.getAll();
	res.json(data);
});

router.post("/todo", async (req, res) => {
	try {
		let { todoInput } = req.body;
		let data = false;
		if (isNaN(todoInput)) {
			data = await itemManager.addTodo(todoInput);
		} else {
			data = await getPokimonNum(todoInput);
			data = "catch " + data;
			data = await itemManager.addTodo(data);
		}
		if (data) {
			return res.json({ sucsess: true });
		}
	} catch (error) {
		return res.send(error.message);
	}
});

async function getPokimonNum(id) {
	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return res.data.name;
	} catch (error) {
		throw new Error("Unable to get a token.");
	}
}

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
