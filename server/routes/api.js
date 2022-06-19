const express = require("express");
const router = express.Router();
const itemManager = require("../services/itemManager");
// const database = 36ba6732755e7c97acb5c2baf4226750537be2125c72376282d148c2ebabeb7d

router.get("/items", (_, res) => {
	res.send(itemManager.getItems());
});

router.post("/item", async (req, res) => {
	await itemManager.handleItem(req.body.item);
	res.end();
});

router.delete("/item", (req, res) => {
	itemManager.deleteItem(req.body.item);
	res.end();
});

// res.set({
// 	"Content-Type": "application/json",
// 	"Access-Control-Allow-Origin": "*",
// });

module.exports = router;
