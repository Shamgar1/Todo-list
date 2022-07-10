import { useEffect, useState, useCallback, useMemo } from "react";
import { List, Button, Search, Loader } from "monday-ui-react-core";
import ListApiService from "../../services/list-api-service";
import ListControlsComponent from "./list-controls-component/ListControlsComponent";
import ListItemComponent from "./list-item-component/ListItemComponent";
import { allReducers } from "../../reducers/index";

import styles from "./ListContainer.module.scss";

import { connect } from "react-redux";
import { dispatch } from "react";
import { store } from "../../store";
import { ListSearch } from "./list-search-component/ListSearch";
import ListControlComponentConnector from "./list-controls-component/list-control-component-connector";
import ListItemComponentConnector from "./list-item-component/List-item-component-connector";
import ListSearchConnector from "./list-search-component/List-search-connector";
import { onlyCompletedItems } from "../../actions/show-completed-items-action";
import { allTodosItems } from "../../actions/show-completed-items-action";
import { getTodoSucess } from "../../actions/get-all-todos-action";
import ListCompletedComponentsConnector from "./list-completed-components/list-completed-components-connector";

function ListContainer({
	itemData,
	getTodoSucess,
	completedItems,
	updatedItems,
	allTodosItems,
	onChange,
}) {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [shouldRefetchItems, setRefetchItems] = useState(false);
	const [value, setValue] = useState("");

	const fetchItems = async () => {
		try {
			ListApiService.getItems().then((res) => {
				getTodoSucess(res);
				setIsLoading(false);
				setRefetchItems(false);
				setItems(itemData);
			});
		} catch (err) {
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
	const onOnlyCompletedItems = useCallback(() => {
		setItems(completedItems);
		setIsLoading(false);
	}, []);
	const onNotCompletedItems = useCallback(() => {
		setItems(completedItems);

		setIsLoading(false);
	}, []);

	const onAllItems = useCallback((itemData) => {
		getTodoSucess(itemData);

		setItems(itemData);

		setIsLoading(false);
	}, []);

	const itemsList = useMemo(() => {
		return itemData.todos.map((todo, key) => (
			<li className="li" key={key}>
				<ListItemComponentConnector
					key={todo.id}
					id={todo.id}
					name={todo.itemName}
					status={!!todo.status}
					onChange={onDeleteOrToggle}
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
				onChange={onSearch}
				value={value}
			/>
			<ListCompletedComponentsConnector
				onChange={onOnlyCompletedItems}
				onClick={onAllItems}
			/>
			<List className={styles.list}>{itemsList}</List>
		</div>
	);
}

export default ListContainer;
