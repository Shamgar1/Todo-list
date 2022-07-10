import { useEffect, useState, useCallback, useMemo } from "react";
import { List, ButtonGroup, Search, Loader } from "monday-ui-react-core";
import ListApiService from "../../services/list-api-service";
import ListControlsComponent from "./list-controls-component/ListControlsComponent";
import ListItemComponent from "./list-item-component/ListItemComponent";
import { allReducers } from "../../reducers/index";
// import {
// 	getSearchItemsOnlySearched,
// 	getItemsView,
// } from "../../selectors/items-view-selectors";
import styles from "./ListContainer.module.scss";
// import {
// 	getTodoSucess,
// 	getTodoRequest,
// 	getTodoFailure,
// } from "../../actions/get-all-todos-action";
// import {
// 	searchSucsess,
// 	searchRequest,
// 	esearchFailure,
// } from "../../actions/search-items-action";
import { connect } from "react-redux";
import { dispatch } from "react";
import { store } from "../../store";
import { ListSearch } from "./list-search-component/ListSearch";
import ListControlComponentConnector from "./list-controls-component/list-control-component-connector";
import ListItemComponentConnector from "./list-item-component/List-item-component-connector";
import ListSearchConnector from "./list-search-component/List-search-connector";

function ListContainer({
	itemData,
	searchedItems,
	getTodoSucess,
	// searchSucsess,
	// updatedItems,
	// searchedItems,
}) {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [shouldRefetchItems, setRefetchItems] = useState(false);
	const [value, setValue] = useState("");
	// const [filteredData, setFilteredData] = useState([]);
	// let [list, setList] = useState([]);
	// const [inputText, setInputText] = useState("");
	// const [name, setName] = useState("");

	// const getTodo = useCallback(
	// 	(res) => {
	// 		debugger;
	// 		console.log(res);
	// 		getTodoSucess(res);
	// 	},
	// 	[getTodoSucess]
	// );

	const fetchItems = async () => {
		try {
			// store.dispatch(getTodoRequest());
			ListApiService.getItems().then((res) => {
				getTodoSucess(res);
				setIsLoading(false);
				setRefetchItems(false);
				setItems(itemData);
			});
		} catch (err) {
			// store.dispatch(getTodoFailure(err));
			setIsLoading(true);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	useEffect(() => {
		if (shouldRefetchItems) fetchItems();
	}, [shouldRefetchItems]);

	const onChangeInItems = useCallback((addItemNew) => {
		setItems(addItemNew);
		setRefetchItems(false);
	}, []);
	const onDeleteOrToggle = useCallback((updatedItems) => {
		setItems(updatedItems);
		setRefetchItems(false);
	}, []);
	const onSearch = useCallback((searchedItems) => {
		setItems(searchedItems);
		setRefetchItems(false);
	}, []);

	// useEffect(() => {
	// 	handleFilter();
	// }, []);

	// const handleSearch = (e) => {
	// 	setValue(e.target.value);
	// 	// const fetchedItems = e.target.value;
	// 	debugger;
	// 	store.dispatch(searchRequest());
	// 	debugger;
	// 	store.dispatch(searchSucsess({ payload: fetchedItems, isLoading }));

	const showAllCompleted = () => {
		console.log(1);
		showAllCompleted();
	};
	const showOnlyCompleted = () => {
		showAllCompleted();
	};
	const showNotCompleted = () => {
		showNotCompleted();
	};

	const itemsList = useMemo(() => {
		debugger;
		return itemData.todos.map((todo, key) => (
			<li className="li" key={key}>
				<ListItemComponentConnector
					key={todo.id}
					id={todo.id}
					name={todo.itemName}
					status={!!todo.status}
					onChange={onDeleteOrToggle}
					// onClick={onDeleteOrToggle}
				/>
			</li>
		));
	}, [items]);

	if (isLoading || shouldRefetchItems) return <Loader size={40} />;

	return (
		<div className={styles.container}>
			<ListControlComponentConnector onChange={onChangeInItems} />
			<ListSearchConnector
				placeholder="Enter a Todo name"
				// handleFilter={onSearchInItems}
				onChange={onSearch}
				value={value}
			/>
			<ButtonGroup
				className={styles.ButtonGroup}
				size={ButtonGroup.sizes.MEDIUM}
				onSelect={function noRefCheck() {
					// if ((value = 1)) {
					// 	console.log(1);
					// }
					// if ((value = 2)) {
					// 	console.log(2);
					// } else {
					// 	console.log(3);
					// }
				}}
				options={[
					{
						text: "Show All Todos",
						value: 1,
						onSelect: { showAllCompleted },
						onClick: { showAllCompleted },
					},
					{
						text: "Completed",
						value: 2,
						onClick: { showOnlyCompleted },
					},
					{
						text: "Not Completed",
						value: 3,
						onClick: { showNotCompleted },
					},
				]}
				value={1}
			/>

			<List className={styles.list}>{itemsList}</List>
		</div>
	);
}

// const mapStateToProps = (state, ownProps) => {
// 	const searchedItems = getSearchItemsOnlySearched();
// 	const itemData = getItemsView();
// 	return {
// 		itemData,
// 		searchedItems,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getTodoSucess: () => dispatch(getTodoSucess()),
// 		searchSucsess: () => dispatch(searchSucsess()),
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainer;
