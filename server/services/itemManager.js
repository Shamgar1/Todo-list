const { Sequelize } = require("sequelize");
const { request } = require("express");
const database = require("mime-db");
const { values } = require("sequelize/lib/operators");
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

	handleItem = async (item) => {
		if (this._isNumber(item)) {
			await this.fetchAndAddPokemon(item);
		} else if (this._isList(item)) {
			await this.fetchAndAddManyPokemon(item);
		} else {
			await this.addItem(item);
		}
	};

	addItem = async (itemName) => {
		this.items.push(itemName);
		Items.create({ itemName });
		await this.getItems();
	};

	addPokemonItem = async (pokemon) => {
		await this.addItem(`Catch ${pokemon.name}`);
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
