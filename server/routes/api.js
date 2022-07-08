const express = require("express");
const router = express.Router();
const itemManager = require("../services/itemManager");

router.get("/items", async (_, res) => {
	res.json(await itemManager.getItems());
});

router.post("/item", async (req, res) => {
	await itemManager.handleItem(req.body.item);
	res.status(200).json();
});

router.post("/item/:id", async (req, res) => {
	await itemManager.completeItem(req.body.item);
	res.status(200).json();
});

router.delete("/item", async (req, res) => {
	await itemManager.deleteItem(req.body.item);
	res.end();
});

module.exports = router;
