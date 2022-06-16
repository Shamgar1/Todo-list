const express = require("express"),
	app = express(),
	port = 3000;
// const bodyparser = require("body-parser");
let path = require("path");

// bodyparser
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/api"));
// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./dist/index.html"));
// });

app.post("/todo", (req, res) => {
	res.send("SHOW");
});

app.listen(port, () => {
	console.info(`startedListen ${port}`);
});
