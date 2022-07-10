// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { allReducers } from "../../reducers/index";
import { getItemsEntities } from "../../selectors/items-entities-selectors";
// import { getAllTodosAction } from "../../actions/get-all-todos-action";
import { TodoList } from "../Todo-List/TodoList";

// const mapStateToProps = (state, ownProps) => {
	const reducer = allReducers(state);
// 	const itemsEntities = getItemsEntities(state);
// 	return { reducer, itemsEntities };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return bindActionCreators({ getAllTodosAction }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const mapDispatchToProps = (dispatch) => {
	return {
		getAllTodos: () => dispatch({ type: "GET_ALL_TODOS" }),
	};
};
export default connect(mapDispatchToProps)(TodoList);
