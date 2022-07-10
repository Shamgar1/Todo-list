// // import { GET_ALL_TODOS } from "./constants/index";
// import ListApiService from "../services/list-api-service";
// import actionsTypes from "./constants/index";

// // const addTodo = () => ({
// // 	type: actionsTypes.ADD_TODO,
// // });

// const getAllTodos = () => {
// 	return (dispatch) => {
// 		ListApiService.getItems().then((todos) => {
// 			console.log(todos);
// 			dispatch({ type: actionsTypes.GET_ALL_TODOS, payload: todos });
// 		});
// 	};
// };

// // module.exports = { addTodo };
// export default getAllTodos;
