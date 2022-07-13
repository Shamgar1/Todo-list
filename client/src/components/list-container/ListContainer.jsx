import { useEffect, useState, useCallback, useMemo } from "react";
import { List, Button, Search, Loader } from "monday-ui-react-core";

import ListControlsComponent from "./list-controls-component/ListControlsComponent";
import ListItemComponent from "./list-item-component/ListItemComponent";
import { allReducers } from "../../reducers/index";

import styles from "./ListContainer.module.scss";
import { ListSearch } from "./list-search-component/ListSearch";
import ListControlComponentConnector from "./list-controls-component/list-control-component-connector";
import ListItemComponentConnector from "./list-item-component/List-item-component-connector";
import ListSearchConnector from "./list-search-component/List-search-connector";
import { onlyCompletedItems } from "../../actions/show-completed-items-action";
import { allTodosItems } from "../../actions/show-completed-items-action";
import { getTodo } from "../../actions/get-all-todos-action";
import ListCompletedComponentsConnector from "./list-completed-components/list-completed-components-connector";
function ListContainer({ getTodo, todos, isLoading, isError }) {
	const [value, setValue] = useState("");

	useEffect(() => {
		getTodo();
	}, []);

	return (
		<div className={styles.container}>
			<ListControlComponentConnector />
			<ListSearchConnector placeholder="Enter a Todo name" value={value} />
			<ListCompletedComponentsConnector />
			<List className={styles.list}>
				<div>
					{isLoading && <Loader size={40} />}
					{!isLoading && isError ? <div>Error: {isError}</div> : null}
					{!isLoading && todos.length ? (
						<ul>
							{todos.map((todo, key) => (
								<li className="li" key={key}>
									<ListItemComponentConnector
										key={todo.id}
										id={todo.id}
										name={todo.itemName}
										status={!!todo.status}
									/>
								</li>
							))}
						</ul>
					) : null}
				</div>
			</List>
		</div>
	);
}

export default ListContainer;
