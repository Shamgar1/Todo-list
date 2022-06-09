// import fetch from "node-fetch";
// import { addTodo } from "./main";
class Main {
	constructor() {
		this.API_BASE = "https://pokeapi.co/api/v2";
	}

	addPokePromise(name) {
		return new Promise((resolve, reject) => {
			fetch(`${this.API_BASE}/pokemon/${name}`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((res) => resolve(res))
				.catch(() => {
					addElemntToDom("Could not find Pokemon id" + name);
				});
		});
	}
}

// let main = new Main();
function addTodo(event) {
	event.preventDefault();
	const promiseArray = [];
	const fetchPokemon = todoInput.value.split(",");
	for (let i = 0; i < fetchPokemon.length; i++) {
		const searchNum = fetchPokemon[i];
		//----add to my list
		//----go to get from api
		if (isNumeric(searchNum)) {
			//is number
			promiseArray.push(main.addPokePromise(searchNum));
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

function isNumeric(str) {
	if (typeof str != "string") return false;
	return !isNaN(str);
}
