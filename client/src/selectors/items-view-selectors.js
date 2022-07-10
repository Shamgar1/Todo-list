import { createSelector } from "reselect";

export const getItemsView = (state) => state.itemsView;

const getSearchItems = (state) => getItemsView(state).todos;

export const getSearchItemsOnlySearched = createSelector(
	[getSearchItems],
	(todos) => {
		// sort() is mutating
		return [...todos].sort();
	}
);
