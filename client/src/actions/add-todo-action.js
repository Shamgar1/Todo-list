// import { ADD_TODO } from "./constants/index";
import ListApiService from "../services/list-api-service";
import actionsTypes from "./constants/index";

// const addTodo = () => ({
// 	type: actionsTypes.ADD_TODO,
// });

const addTodo = (itemName) => {
	return async (dispatch) => {
		await ListApiService.postItem(itemName).then((res) => res.data);
		// console.log(newItem);
		// console.log(data);
		debugger;
		dispatch({ type: actionsTypes.ADD_TODO, payload: itemName });
		debugger;
	};
};

// module.exports = { addTodo };
export default addTodo;
