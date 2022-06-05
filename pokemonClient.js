import { listManager } from "./listManager";

class Main {
	constructor() {
		this.API_BASE = "https://pokeapi.co/api/v2";
		listManager;
	}

	async addPoke(name) {
		const response = await fetch(`${this.API_BASE}/pokemon/${name}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"content-Type": "application/json",
			},
		});

		if (!response.ok) {
			return "Could not find Pokemon id: ${name}";
		}
		const addPoke = await response.json();
		return "Catch " + addPoke.name;
	}
}
