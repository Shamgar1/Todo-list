const fs = require("fs");

async function getAll() {
	return readItemList();
}

async function readItemList() {
	try {
		const data = await fs.readFileSync("./data/itemList.json");
		console.log(data.toString());
		return JSON.parse(data.toString());
	} catch (error) {
		console.error(`Got an error trying to read the file: ${error.message}`);
	}
}

async function writeItemList(content) {
	try {
		await fs.writeFileSync("./data/itemList.json", JSON.stringify(content));
	} catch (error) {
		console.error(`Failed to write to file ${error.message}`);
	}
}

async function addTodo(title) {
	let data = fs.readFileSync("./data/itemList.json");
	let jsonData = JSON.parse(data);
	let newTodo = { name: title };
	jsonData.push(newTodo);
	fs.writeFileSync("./data/itemList.json", JSON.stringify(jsonData));
	return newTodo;
}

async function deleteTodo(id) {
	let data = await getAll();
	// let index = id
	// let deleteTodo = data[index];
	data.splice(id, 1);
	await writeItemList(data);
	return id;
}
// let jsonData = JSON.parse(data);
// jsonData.splice(0, 1);
// fs.writeFileSync("./data/itemList.json", JSON.stringify(jsonData));
// return true;

module.exports = { getAll, addTodo, deleteTodo };
