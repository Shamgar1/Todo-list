import actionsTypes from "./index";

const completed = () => ({
	type: actionsTypes.SHOW_COMPLETED_ITEMS,
});
const notCompleted = () => ({
	type: actionsTypes.SHOW_NOT_COMPLETES_ITEMS,
});

const allTodos = (todos) => ({
	type: actionsTypes.GET_TODO_SUCESS,
	todos,
});

export const onlyCompletedItems = () => {
	return (dispatch) => {
		dispatch(completed());
	};
};

export const notCompletedItems = () => {
	return (dispatch) => {
		dispatch(notCompleted());
	};
};

export const allTodosItems = (todos) => {
	return (dispatch) => {
		dispatch(allTodos(todos));
	};
};
