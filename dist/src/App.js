import "./App.css";
import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/Todo-List/TodoList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Ayelet's to-do list</p>
				<div>
					<TodoList />
				</div>
			</header>
		</div>
	);
}

export default App;
