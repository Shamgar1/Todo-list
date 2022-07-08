import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, Loader, Button } from "monday-ui-react-core";
import Delete from "monday-ui-react-core/dist/icons/Delete";
import ListApiService from "../../../services/list-api-service";
import styles from "./ListItemComponent.module.scss";
import {
	deleteTodoSucess,
	deleteTodoRequest,
} from "../../../actions/delete-todo-action";
import {
	toggleTodoRequest,
	toggleTodoSucess,
	toggleTodoFailure,
} from "../../../actions/toggle-todo-action";
import { store } from "../../../store";

function ListItemComponent({ name, id, status, onChange }) {
	const [isLoading, setIsLoading] = useState(false);

	const onToggleItem = useCallback(async () => {
		const checked = !status;
		const item = { name, id, status: checked };
		try {
			store.dispatch(toggleTodoRequest());
			await ListApiService.toggleDone(item);
			store.dispatch(toggleTodoSucess(item));
			debugger;
			setIsLoading(false);
			onChange(item);
		} catch (err) {
			store.dispatch(toggleTodoFailure(err));
			setIsLoading(true);
		}
	}, [status]);

	const onDeleteItem = useCallback(async () => {
		const item = { name, id, status };
		setIsLoading(true);
		store.dispatch(deleteTodoRequest());
		await ListApiService.deleteItem(item);
		store.dispatch(deleteTodoSucess({ id }));
		console.log(store.dispatch(deleteTodoSucess({ id })));
		debugger;
		setIsLoading(false);
		onChange(item);
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
			/>
		</div>
	);
}

ListItemComponent.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	status: PropTypes.bool,
	onChange: PropTypes.func,
};

ListItemComponent.defaultProps = {
	status: false,
};

export default ListItemComponent;
