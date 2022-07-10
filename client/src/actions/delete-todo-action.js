import actionsTypes from "./index";
const deleteItem = (todos) => ({
	type: actionsTypes.DELETE_TODO_SUCESS,
	todos,
});
// export const addTodoRequest = () => ({
// 	type: actionsTypes.ADD_TODO_REQUEST,
// });

export const deleteTodoSucess = (todos) => {
	return (dispatch) => {
		dispatch(deleteItem(todos));
	};
	// type: actionsTypes.ADD_TODO_SUCESS,
	// payload,
};

// 	type: actionsTypes.delete(),
// 	payload,
// });

// export const deleteTodoFailure = (error) => ({
// 	type: DELETE_TODO_FAILURE,
// 	payload: error,
// });
