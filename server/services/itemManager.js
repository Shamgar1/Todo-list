const { Sequelize } = require("sequelize");
const { request } = require("express");
const database = require("mime-db");
const { values } = require("sequelize/lib/operators");
const { INSERT } = require("sequelize/lib/query-types");
const PokemonClient = require("../clients/pokemonClient");

const Items = require("../db/models/items");
const { findAll } = require("sequelize/lib/model");
// const Items = require("../db/models");

class ItemManager {
	constructor() {
		this.pokemonClient = new PokemonClient();
		this.items = []; //TODO: remove, items should be stored to DB using Item sequelize model
	}

	getItems = async () => {
		let items = await Items.findAll();
		return items;
	};

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
		Items.create({ itemName });
		await this.getItems();
	};

	addPokemonItem = async (pokemon) => {
		await this.addItem(`Catch ${pokemon.name}`);
		// this.getItems();
		// this.getItems();
	};

	fetchAndAddPokemon = async (pokemonId) => {
		try {
			const pokemon = await this.pokemonClient.getPokemon(pokemonId);
			await this.addPokemonItem(pokemon);
		} catch (error) {
			this.addItem(`Pokemon with ID ${pokemonId} was not found`);
		}
	};

	fetchAndAddManyPokemon = async (inputValue) => {
		try {
			const pokemons = await this.pokemonClient.getManyPokemon(
				inputValue.replace("/ /g", "").split(",")
			);
			pokemons.forEach(await this.addPokemonItem());
		} catch (error) {
			console.error(error);
			this.addItem(`Failed to fetch pokemon with this input: ${inputValue}`);
		}
	};

	deleteItem = async (item) => {
		// this.items = this.items.filter((i) => i !== item);
		const row = await Items.destroy({ where: { id: item.id } });
		return await this.getItems();
	};

	_isNumber = (value) => !isNaN(Number(value));
	_isList = (value) => value.split(",").every(this._isNumber);
}

module.exports = new ItemManager();
