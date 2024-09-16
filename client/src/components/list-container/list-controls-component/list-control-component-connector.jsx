import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addAnotherItem } from "../../../actions/add-todo-action";
import ListControlsComponent from "./ListControlsComponent";
import { getItemsView } from "../../../selectors/items-view-selectors";

const mapStateToProps = (state, ownProps) => {
	const addItemNew = {};
	return {
		addItemNew,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addAnotherItem }, dispatch);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListControlsComponent);
