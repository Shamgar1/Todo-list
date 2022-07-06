import "./App.css";

import ListContainer from "./components/Todo-List/ListContainer";
// import AddToDo from "./components/Todo-List/AddToDo";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Ayelet's to-do list</p>
				<ListContainer />
			</header>
		</div>
	);
}

export default App;
