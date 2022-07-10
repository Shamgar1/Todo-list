import React, { useCallback, useState } from "react";
import styles from "./ListCompletetdComponents.module.scss";
import PropTypes from "prop-types";
import { onlyCompletedItems } from "../../../reducers/items-view-reducer";
import { toggleTodoSucess } from "../../../actions/toggle-todo-action";
import { getTodoSucess } from "../../../actions/get-all-todos-action";
import { Button } from "monday-ui-react-core";
import ListApiService from "../../../services/list-api-service";

function ListCompletetdComponents({
	completedItems,
	onChange,
	notCompletedItems,
	onlyCompletedItems,
	res,
	onClick,
	// searchedItems,
}) {
	const [isLoading, setIsLoading] = useState(false);

	const onOnlyCompletedItems = useCallback(async () => {
		onlyCompletedItems();

		onChange(completedItems);
	}, []);
	const onNotCompletedItems = useCallback(async () => {
		notCompletedItems();
		onChange(completedItems);
		setIsLoading(false);
	}, []);
	const onAllItems = useCallback(async (res) => {
		ListApiService.getItems().then((res) => {
			getTodoSucess(res);
			onClick(res);

			setIsLoading(false);
		});
	}, []);

	return (
		<div className={styles.container}>
			<Button
				size={Button.sizes.MEDIUM}
				onClick={onOnlyCompletedItems}
				onChange={onOnlyCompletedItems}
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
