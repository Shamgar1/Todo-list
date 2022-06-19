const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const api = require("./server/routes/api");
const port = process.env.PORT;
console.log(`Your port is ${port}`);

const main = async () => {
	const app = express();

	app.use(express.static(path.join(__dirname, "dist")));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use("/", api);

	

	// const port = process.env.PORT || "3000";
	app.listen(port, function () {
		console.log("Running on " + port);
	});
};

main();
