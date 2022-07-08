import React, { useCallback, useState } from "react";
// import {Field, reduxForm}  from 'redux-form';
import { Search } from "monday-ui-react-core";
import styles from "../list-search-component/ListSearch.module.scss";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import { store } from "../../../store";
import {
	searchSucsess,
	searchRequest,
	esearchFailure,
} from "../../../actions/search-items-action";

export function ListSearch({ placeholder, data, handleFilter }) {
	const [filteredData, setFilteredData] = useState([]);
	const [value, setValue] = useState("");

	const handleSearch = useCallback(async (value) => {
		// const searchWord = event.target.value;

		setValue(value);
		handleFilter(value);
		console.log(filteredData);

		debugger;

		// 	if (value === "") {
		// 		setFilteredData([]);
		// 	} else {
		// 		setFilteredData(newFilter);
		// 	}
	}, []);

	const clearInput = () => {
		setFilteredData([]);
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

			{/* <div className="searchIcon">
				{filteredData.length === 0 ? (
					<SearchIcon />
				) : (
					<CloseIcon id="clearBtn" onClick={clearInput} />
				)}
			</div> */}
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<a className="dataItem" href={value.link} target="_blank">
								<p>{value.title} </p>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
}

{
	/* // ListSearch = reduxForm({
	form: "ListSearch",
})(ListSearch); */
}

// export default ListSearch;
