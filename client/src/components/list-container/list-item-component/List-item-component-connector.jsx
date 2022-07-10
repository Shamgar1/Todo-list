import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import {
// 	addTodoSucess,

// } from "../../selectors/items-view-selectors";
import { deleteTodoSucess } from "../../../actions/delete-todo-action";
import { toggleTodoSucess } from "../../../actions/toggle-todo-action";
// import ListControlsComponent from "./ListControlsComponent";
import { getItemsView } from "../../../selectors/items-view-selectors";
import ListItemComponent from "./ListItemComponent";

const mapStateToProps = (state, ownProps) => {
	// const searchedItems = getSearchItemsOnlySearched(state);
	// const deleteNew = getItemsView(state);
	const updatedItems = getItemsView(state);
	debugger;

	return {
		// deleteNew,
		updatedItems,
		// searchedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ deleteTodoSucess, toggleTodoSucess }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);
