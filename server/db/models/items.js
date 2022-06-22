const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "password", {
	host: "localhost",
	port: 3306,
	dialect: "mysql",
});

module.exports = sequelize.define("Item", {
	id: {
		primaryKey: true,
		type: Sequelize.INTEGER,
		autoIncrement: true,
	},
	itemName: Sequelize.STRING,
});
