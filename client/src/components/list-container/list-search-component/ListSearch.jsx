import React, { useCallback, useState } from "react";

import { Search } from "monday-ui-react-core";
import styles from "../list-search-component/ListSearch.module.scss";
import PropTypes from "prop-types";

export function ListSearch({
	placeholder,
	onChange,
	searchedItems,
	searchSucsess,
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [value, setValue] = useState("");

	const handleSearch = useCallback(async (value) => {
		setValue(value);
		searchSucsess(value);
		onChange(searchedItems);
		setIsLoading(false);
	}, []);

	const clearInput = () => {
		setValue("");
	};

	return (
		<div className={styles.container}>
			<Search
				placeholder={placeholder}
				// type="text"
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
