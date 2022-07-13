import { createSelector } from "reselect";

export const getItemsView = (state) => state.itemsView;

const getSearchItems = (state) => getItemsView(state).todos;
export const getIsLoading = (state) => getItemsView(state).isLoading;
export const getError = (state) => getItemsView(state).error;


export const getSearchItemsOnlySearched = createSelector(
	[getSearchItems],
	(todos) => {
		// sort() is mutating
		return [...todos].sort();
	}
);

// export const selectTotalCompletedTodos = (state) => {
// 	const completedTodos = state.todos.filter((item) => item.status);
// 	return completedTodos.length;
// };
