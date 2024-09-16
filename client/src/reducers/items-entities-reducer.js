import actionsTypes from "../actions/index";

const initialState = {
	todos: [],
};

const itemsEntitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.GET_TODO_SUCESS:
			return {
				...state,
				todos: action.todos,
			};
		case actionsTypes.ADD_TODO_SUCESS: {
			let newTodos = (state.todos, action.todos);
			return {
				...state,
				todos: newTodos,
			};
		}
		case actionsTypes.DELETE_TODO_SUCESS: {
			return {
				todos: state.todos.filter((item) => item.id !== action.todos.id),
			};
		}

		case actionsTypes.TOGGLE_TODO_SUCESS:
			return {
				...state,
				todos: action.todos,
			};

		case actionsTypes.SEARCH_SUCESS:
			const searchedItem = state.todos.filter((item) =>
				item.itemName.startsWith([action.todos])
			);
			console.log(searchedItem);
			debugger;
			return { ...state, todos: searchedItem };

		case actionsTypes.SHOW_COMPLETED_ITEMS:
			let completedItems = state.todos.filter((item) => item.status === true);
			return {
				...state,
				todos: completedItems,
			};

		case actionsTypes.SHOW_NOT_COMPLETES_ITEMS:
			let notCompletedItems = state.todos.filter(
				(item) => item.status === false
			);
			return {
				...state,
				todos: notCompletedItems,
			};

		default:
			return state;
	}
};

export default itemsEntitiesReducer;
