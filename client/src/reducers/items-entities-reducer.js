// import ADD_TODO from "../actions/constants";

// const initialState = {
// 	itemName: [],
// 	// id: null,
// 	// status: false
// };

// const itemsEntitiesReducer = (state = initialState, action) => {
// 	debugger;
// 	switch (action.type) {
// 		case ADD_TODO: {
// 			// const { content } = action.payload;
// 			// return {
// 			// 	...state,
// 			// 	itemName: [...state.itemName],
// 			// };
// 		}
// 	}
// };

// export default itemsEntitiesReducer;

// import ADD_TODO from "../actions/add-todo-action";
// import GET_ALL_TODOS from "../actions/get-all-todos-action";
import actionTypes from "../actions/constants";

const initialState = {
	todos: [],
};

const itemsEntitiesReducer = (state = initialState, action) => {
	debugger;
	switch (action.type) {
		// case actionTypes.GET_ALL_TODOS: {
		// 	return action.payload;
		// }
		case actionTypes.ADD_TODO: {
			return {
				...state,
				itemName: [action.payload],
			};
		}
		case actionTypes.DELETE_TODO: {
			return {
				...state,
				itemName: [action.payload],
			};
		}
		default:
			return state;
	}
};

export default itemsEntitiesReducer;
