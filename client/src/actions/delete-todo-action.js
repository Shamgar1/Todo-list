import { DELETE_TODO } from "./constants/index";
import ListApiService from "../services/list-api-service";
import actionsTypes from "./constants/index";

// const addTodo = () => ({
// 	type: actionsTypes.ADD_TODO,
// });

const deleteTodo = (itemName) => {
	return async (dispatch) => {
		let Item = await ListApiService.deleteItem(itemName).then(
			(res) => res.data
		);
		dispatch({ type: actionsTypes.DELETE_TODO, payload: newItem });
		debugger;
	};
};

// module.exports = { addTodo };
export default deleteTodo;
