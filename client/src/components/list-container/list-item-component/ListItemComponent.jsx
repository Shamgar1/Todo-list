import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, Loader, Button } from "monday-ui-react-core";
import Delete from "monday-ui-react-core/dist/icons/Delete";
import ListApiService from "../../../services/list-api-service";
import styles from "./ListItemComponent.module.scss";
// import {
// 	deleteTodoSucess,
// 	deleteTodoRequest,
// } from "../../../actions/delete-todo-action";
// import {
// 	toggleTodoRequest,
// 	toggleTodoSucess,
// 	toggleTodoFailure,
// } from "../../../actions/toggle-todo-action";
// import { store } from "../../../store";

function ListItemComponent({
	name,
	id,
	status,
	onChange,
	// onClick,
	toggleTodoSucess,
	deleteTodoSucess,
	updatedItems,
	// onClick,
	// deleteNew,
}) {
	const [isLoading, setIsLoading] = useState(false);

	const onToggleItem = useCallback(async () => {
		const checked = !status;
		const item = { name, id, status: checked };
		try {
			await ListApiService.toggleDone(item)
				// .then((res) => res.json())
				.then((todos) => {
					debugger;
					toggleTodoSucess(todos);
					debugger;

					setIsLoading(false);
					onChange(updatedItems);
				});
		} catch (err) {
			// (toggleTodoFailure(err));
			setIsLoading(true);
		}
	}, [status]);

	const onDeleteItem = useCallback(async () => {
		const item = { name, id, status };
		await ListApiService.deleteItem(item)
			.then((res) => res.json())
			.then((list) => {
				debugger;
				deleteTodoSucess(list);
				// console.log(store.dispatch(deleteTodoSucess({ id })));
				debugger;

				onChange(updatedItems);
				setIsLoading(false);
				// onClick(list);
			});
	}, []);

	if (isLoading) {
		return (
			<div className={styles.container} key={id}>
				<Loader size={40} />
			</div>
		);
	}

	return (
		<div className={styles.container} key={id}>
			<Checkbox
				checked={status}
				className={styles.checkbox}
				onChange={onToggleItem}
			/>
			<p className={styles.text} onClick={onToggleItem}>
				{name}
			</p>
			<Button
				rightIcon={Delete}
				size={Button.sizes.SMALL}
				kind={Button.kinds.TERTIARY}
				className={styles.deleteButton}
				onClick={onDeleteItem}
				// onChange={onDeleteItem}
				// onChange={onToggleItem}
			/>
		</div>
	);
}

ListItemComponent.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	status: PropTypes.bool,
	onChange: PropTypes.func,
	// onClick: PropTypes.func,
};

ListItemComponent.defaultProps = {
	status: false,
};

export default ListItemComponent;
