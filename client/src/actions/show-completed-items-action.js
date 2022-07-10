import actionsTypes from "./index";

const completed = () => ({
	type: actionsTypes.SHOW_COMPLETED_ITEMS,
});

export const onlyCompletedItems = () => {
	return (dispatch) => {
		dispatch(completed());
	};
};
const notCompleted = () => ({
	type: actionsTypes.SHOW_NOT_COMPLETES_ITEMS,
});

export const notCompletedItems = () => {
	return (dispatch) => {
		dispatch(notCompleted());
	};
};
const allTodos = (todos) => ({
	type: actionsTypes.GET_TODO_SUCESS,
	todos,
});

export const allTodosItems = (todos) => {
	return (dispatch) => {
		dispatch(allTodos(todos));
	};
};
