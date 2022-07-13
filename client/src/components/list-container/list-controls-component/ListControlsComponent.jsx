import { useCallback, useState } from "react";
import TextField from "monday-ui-react-core/dist/TextField";
import Button from "monday-ui-react-core/dist/Button";
import Add from "monday-ui-react-core/dist/icons/Add";
import PropTypes from "prop-types";
import ListApiService from "../../../services/list-api-service";
import { addAnotherItem } from "../../../actions/add-todo-action";
import styles from "./ListControlsComponent.module.scss";

function ListControlsComponent({ addAnotherItem, addItemNew }) {
	const [name, setName] = useState("");

	const onInputChange = useCallback((value) => {
		setName(value);
	}, []);

	const addItem = useCallback(async () => {
		setName("");
		addAnotherItem(name);
		// onChange(addItemNew);
	}, [name]);

	const handleEnterPressed = useCallback(
		(event) => {
			if (event.key === "Enter") {
				event.preventDefault();
				addItem(name);
			}
		},
		[addItem, name]
	);

	return (
		<div className={styles.container}>
			<TextField
				placeholder="Add your new todo"
				size={TextField.sizes.MEDIUM}
				className={styles.input}
				onChange={onInputChange}
				onKeyDown={handleEnterPressed}
			/>
			<Button rightIcon={Add} onClick={addItem} className={styles.addButton} />
		</div>
	);
}

export default ListControlsComponent;
