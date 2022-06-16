class pokemonClient {
	constructor() {
		this.API_BASE = "https://pokeapi.co/api/v2";
	}

	async addPokePromise(name) {
		const url = `${this.API_BASE}/pokemon/${name}`;
		const res = await fetch(url);
		const data = await res.json();
		return data.name;
	}

	addTodo(event) {
		event.preventDefault();
		const promiseArray = [];
		const fetchPokemon = todoInput.value.split(",");
		for (let i = 0; i < fetchPokemon.length; i++) {
			const searchNum = fetchPokemon[i];
			//----add to my list
			//----go to get from api
			if (isNumeric(searchNum)) {
				//is number
				promiseArray.push(pokemonClient.addPokePromise(searchNum));
			} else {
				mylistManager.add(searchNum);
				//is string
				addElemntToDom(searchNum);
			}
		}
		Promise.all(promiseArray).then((values) => {
			for (let index = 0; index < values.length; index++) {
				const pokemon = values[index];
				addElemntToDom(pokemon.name, true);
				mylistManager.add(pokemon.name);
			}
		});
		//---clear input
		todoInput.value = "";
	}

	isNumeric(str) {
		if (typeof str != "string") return false;
		return !isNaN(str);
	}
}
