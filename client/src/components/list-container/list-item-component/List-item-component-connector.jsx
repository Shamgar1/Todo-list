import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTodoSucess } from "../../../actions/delete-todo-action";
import { toggleTodoSucess } from "../../../actions/toggle-todo-action";

import { getItemsView } from "../../../selectors/items-view-selectors";
import ListItemComponent from "./ListItemComponent";

const mapStateToProps = (state, ownProps) => {
	const updatedItems = getItemsView(state);
	return {
		updatedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ deleteTodoSucess, toggleTodoSucess }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);
