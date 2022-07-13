import React, { useCallback, useState } from "react";
import styles from "./ListCompletetdComponents.module.scss";
import PropTypes from "prop-types";
import { onlyCompletedItems } from "../../../reducers/items-view-reducer";
import { toggleTodoSucess } from "../../../actions/toggle-todo-action";
// import { getTodoSucess } from "../../../actions/get-all-todos-action";
import { Button } from "monday-ui-react-core";
import ListApiService from "../../../services/list-api-service";
import { getTodo } from "../../../actions/get-all-todos-action";

function ListCompletetdComponents({
	completedItems,
	onChange,
	notCompletedItems,
	onlyCompletedItems,
	getTodo,
	// res,
	onClick,
	// searchedItems,
}) {
	const [isLoading, setIsLoading] = useState(false);

	const onOnlyCompletedItems = useCallback(async () => {
		onlyCompletedItems();
	}, []);
	const onNotCompletedItems = useCallback(async () => {
		notCompletedItems();
	}, []);
	const onAllItems = useCallback(async (res) => {
		getTodo();
	}, []);

	return (
		<div className={styles.container}>
			<Button
				size={Button.sizes.MEDIUM}
				onClick={onOnlyCompletedItems}
				className={styles.Button}
			>
				Completed Todos
			</Button>
			<Button
				size={Button.sizes.MEDIUM}
				onClick={onNotCompletedItems}
				className={styles.Button}
			>
				Not Completed Todos
			</Button>
			<Button
				size={Button.sizes.MEDIUM}
				onClick={onAllItems}
				className={styles.Button}
			>
				All Todos
			</Button>
		</div>
	);
}
ListCompletetdComponents.propTypes = {
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};
export default ListCompletetdComponents;
