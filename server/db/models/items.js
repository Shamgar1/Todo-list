"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Items extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Items);
		}
	}

	// const sequelize = new Sequelize("sqlite::memory:");
	// const User = sequelize.define("User", {
	// 	username: DataTypes.STRING,
	// 	birthday: DataTypes.DATE,
	// });

	Items.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				autoIncrement: true,
			},
			itemName: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "Items",
		}
	);
	Items.sync()
		.then(() => {
			console.log("model synced succssefully");
			return Items.findAll({ attributes: ["name"] });
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
};
