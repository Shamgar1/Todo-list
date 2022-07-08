import "./App.module.scss";

import ListContainer from "./components/list-container/ListContainer";
// import VisibleTodoList from "./components/containers/VisibleTodoList";
// import Footer from "./components/Todo-List/Footer";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.container}>
			<h1>Ayelet's List</h1>
			<ListContainer />
			{/* <ListContainer /> */}
			{/* <VisibleTodoList /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
