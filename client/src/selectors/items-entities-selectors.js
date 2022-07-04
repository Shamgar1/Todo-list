import { addTodo, deleteTodo, toggleTodo } from "../actions/add-todo-action";

const getItemsEntities = (state) => state.itemsEntities;

const mapDispatchToProps = {
	addTodo,
	deleteTodo,
	toggleTodo,
};
bindActionCreators(mapDispatchToProps, dispatch);
export default connect(null, mapDispatchToProps)(TodoApp);
