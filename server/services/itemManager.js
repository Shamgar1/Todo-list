const { Sequelize } = require("sequelize");
const { request } = require("express");
const database = require("mime-db");
const { INSERT } = require("sequelize/lib/query-types");
const PokemonClient = require("../clients/pokemonClient");

const Items = require("../db/models/items");
const { findAll } = require("sequelize/lib/model");

class ItemManager {
	constructor() {
		this.pokemonClient = new PokemonClient();
		this.items = [];
	}

	getItems = async () => {
		const items = await Items.findAll();
		return items;
	};

	// getItems = async () => {
	// 	const items = await Items.findAll();
	// 	return items.map((item) => {
	// 		return {
	// 			id: item.id,
	// 			name: item.itemName,
	// 			status: item.status,
	// 		};
	// 	});
	// };

	handleItem = async (item) => {
		if (this._isNumber(item)) {
			return await this.fetchAndAddPokemon(item);
		}
		if (this._isList(item)) {
			return await this.fetchAndAddManyPokemon(item);
		}
		await this.addItem(item);
	};

	addItem = async (itemName) => {
		this.items.push(itemName);
		await Items.create({ itemName });
		await this.getItems();
	};

	addPokemonItem = async (pokemon) => {
		await this.addItem(`Catch ${pokemon.name}`);
	};

	fetchAndAddPokemon = async (pokemonId) => {
		try {
			const pokemon = await this.pokemonClient.getPokemon(pokemonId);
			this.addPokemonItem(pokemon);
		} catch (error) {
			await this.addItem(`Pokemon with ID ${pokemonId} was not found`);
		}
	};

	fetchAndAddManyPokemon = async (inputValue) => {
		try {
			const pokemons = await this.pokemonClient.getManyPokemon(
				inputValue.replace("/ /g", "").split(",")
			);
			const pokemonsPromises = pokemons.map(async (newItem) => {
				const newPokemon = await this.addPokemonItem(newItem);
				return newPokemon;
			});
			const newPokemons = await Promise.all(pokemonsPromises);
			console.log(newPokemons);
		} catch (error) {
			console.error(error);
			this.addItem(`Failed to fetch pokemon with this input: ${inputValue}`);
		}
	};

	deleteItem = async (item) => {
		const row = await Items.destroy({ where: { id: item.id } });
		return await this.getItems();
	};

	_isNumber = (value) => !isNaN(Number(value));
	_isList = (value) => value.split(",").every(this._isNumber);

	completeItem = async (id, status) => {
		return await Items.update({ status }, { where: { id } });
	};
}
module.exports = new ItemManager();
