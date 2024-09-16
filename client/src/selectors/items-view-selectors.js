import { createSelector } from "reselect";

export const getItemsView = (state) => state.itemsView;

const getSearchItems = (state) => getItemsView(state).todos;
export const getIsLoading = (state) => getItemsView(state).isLoading;
export const getError = (state) => getItemsView(state).error;


export const getSearchItemsOnlySearched = createSelector(
	[getSearchItems],
	(todos) => {
		return [...todos].sort();
	}
);

