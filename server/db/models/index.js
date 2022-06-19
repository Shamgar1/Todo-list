"use strict";

// const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
let mysql = require("mysql2");

let connection = mysql.createConnection({
	username: "root",
	password: "password",
	database: "todo_db",
	host: "127.0.0.1",
	dialect: "mysql",
});

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

connection.connect(function (err) {
	if (err) {
		return console.error("error: " + err.message);
	}
	console.log("Connected!");
});
//   	const sql = "INSERT INTO Items (id, itemName)VALUES (@id, @itemName)";
// 				config.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// }

// id: request.body.id,
// itemName: request.body.item,

// fs.readdirSync(__dirname)
// 	.filter((file) => {
// 		return (
// 			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
// 		);
// 	})
// 	.forEach((file) => {
// 		const model = require(path.join(__dirname, file))(
// 			sequelize,
// 			Sequelize.DataTypes
// 		);
// 		db[model.name] = model;
// 	});

// Object.keys(db).forEach((modelName) => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
