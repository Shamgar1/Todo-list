import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTodo } from "../../../actions/delete-todo-action";
import { updateStatus } from "../../../actions/toggle-todo-action";

import { getItemsView } from "../../../selectors/items-view-selectors";
import ListItemComponent from "./ListItemComponent";

const mapStateToProps = (state, ownProps) => {
	const updatedItems = {};
	return {
		updatedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ deleteTodo, updateStatus }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);
