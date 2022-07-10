import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodoSucess } from "../../../actions/add-todo-action";
import ListControlsComponent from "./ListControlsComponent";
import { getItemsView } from "../../../selectors/items-view-selectors";

const mapStateToProps = (state, ownProps) => {
	const addItemNew = getItemsView(state);
	return {
		addItemNew,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addTodoSucess }, dispatch);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListControlsComponent);
