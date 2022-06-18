const axios = require("axios").default;

async function pokemonClient(id) {
	try {
		const url = "https://pokeapi.co/api/v2/pokemon/";
		const res = await axios.get(`${url}${id}`);
		return res.data.name;
	} catch (error) {
		return `failed, Could not find Pokemon id: ${id}`;
	}
}

module.exports = pokemonClient;
