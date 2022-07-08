import { useEffect, useState, useCallback, useMemo } from "react";
import { List, Search, Loader } from "monday-ui-react-core";
import ListApiService from "../../services/list-api-service";
import ListControlsComponent from "./list-controls-component/ListControlsComponent";
import ListItemComponent from "./list-item-component/ListItemComponent";
import { allReducers } from "../../reducers/index";
import styles from "./ListContainer.module.scss";
import {
	getTodoSucess,
	getTodoRequest,
	getTodoFailure,
} from "../../actions/get-all-todos-action";
import {
	searchSucsess,
	searchRequest,
	esearchFailure,
} from "../../actions/search-items-action";
import { connect } from "react-redux";
import { dispatch } from "react";
import { store } from "../../store";
import { ListSearch } from "./list-search-component/ListSearch";

function ListContainer({ itemData }) {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [shouldRefetchItems, setRefetchItems] = useState(false);
	const [value, setValue] = useState("");
	// const [filteredData, setFilteredData] = useState([]);
	// let [list, setList] = useState([]);
	// const [inputText, setInputText] = useState("");
	// const [name, setName] = useState("");

	const fetchItems = async () => {
		try {
			store.dispatch(getTodoRequest());
			ListApiService.getItems().then((fetchedItems) => {
				store.dispatch(getTodoSucess({ todos: fetchedItems, isLoading }));
				setIsLoading(false);
				setRefetchItems(false);
				setItems(fetchedItems);
			});
		} catch (err) {
			store.dispatch(getTodoFailure(err));
			setIsLoading(true);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	useEffect(() => {
		if (shouldRefetchItems) fetchItems();
	}, [shouldRefetchItems]);

	const onChangeInItems = useCallback(() => {
		setRefetchItems(true);
	}, []);

	useEffect(() => {
		fetchItems();
	}, []);

	// const handleSearch = (e) => {
	// 	setValue(e.target.value);
	// 	// const fetchedItems = e.target.value;
	// 	debugger;
	// 	store.dispatch(searchRequest());
	// 	debugger;
	// 	store.dispatch(searchSucsess({ payload: fetchedItems, isLoading }));

	const handleFilter = (value) => {
		// debugger;
		// const searchWord = event.target.value;
		let x = store.dispatch(searchSucsess({ payload: value }));
		// console.log(store.getState().itemsView.todos);
		console.log(store.getState());
		debugger;
		setItems(store.getState().itemsView.todos.todos);

		// setValue(event.target.value);
		// debugger;
		// store.dispatch(searchRequest());
		// debugger;
		// store.dispatch(searchSucsess({ payload: value }));

		// const newFilter = list.filter((value) => {
		// 	return value.title.toLowerCase().includes(value.toLowerCase());
		// });

		// if (value === "") {
		// 	setList([]);
		// } else {
		// 	setList(newFilter);
		// }
	};

	const itemsList = useMemo(() => {
		console.log(itemData);
		debugger;
		return itemData.isLoading ? (
			<h2>Loading</h2>
		) : itemData.error ? (
			<h2>{itemData.error}</h2>
		) : (
			itemData &&
			itemData.todos &&
			itemData.todos.map((todo, key) => (
				<li className="li" key={key}>
					<ListItemComponent
						key={todo.id}
						id={todo.id}
						name={todo.itemName}
						status={!!todo.status}
						onChange={onChangeInItems}
					/>
				</li>
			))
		);
	}, [items]);

	if (isLoading || shouldRefetchItems) return <Loader size={40} />;

	return (
		<div className={styles.container}>
			{/* <Search
				placeholder="Placeholder text here"
				// wrapperClassName="monday-storybook-search_size"
				onChange={handleSearch}
				// value={target.value}
				value={value}
				// onKeyDown={handleEnterPressed}
			/> */}
			{/* <ListSearch input={inputText} /> */}
			<ListControlsComponent onChange={onChangeInItems} />
			<ListSearch
				placeholder="Enter a Todo name"
				handleFilter={handleFilter}
				value={value}
			/>
			<List className={styles.list}>{itemsList}</List>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		itemData: state.itemsView,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getTodoSucess: () => dispatch(getTodoSucess()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

// export default ListContainer;
