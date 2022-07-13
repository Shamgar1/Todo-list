import React, { useCallback, useState } from "react";

import { Search } from "monday-ui-react-core";
import styles from "../list-search-component/ListSearch.module.scss";
import PropTypes from "prop-types";
import { searchTodo } from "../../../actions/search-items-action";

export function ListSearch({ placeholder, searchTodo }) {
	const [value, setValue] = useState("");

	const handleSearch = useCallback(async (value) => {
		setValue(value);
		searchTodo(value);
	}, []);

	const clearInput = () => {
		setValue("");
	};

	return (
		<div className={styles.container}>
			<Search
				placeholder={placeholder}
				value={value}
				onChange={handleSearch}
				onClick={clearInput}
				className={styles.searchButton}
			></Search>
		</div>
	);
}
ListSearch.propTypes = {
	onChange: PropTypes.func,
};
