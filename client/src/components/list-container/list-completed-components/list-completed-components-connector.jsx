import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	onlyCompletedItems,
	notCompletedItems,
} from "../../../actions/show-completed-items-action";
import { getTodo } from "../../../actions/get-all-todos-action";
import ListCompletetdComponents from "./ListCompletetdComponents";
import { getItemsView } from "../../../selectors/items-view-selectors";

const mapStateToProps = (state, ownProps) => {
	const completedItems = getItemsView(state);
	const res = getItemsView(state);

	return {
		completedItems,
		res,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			onlyCompletedItems,
			notCompletedItems,
			getTodo,
		},
		dispatch
	);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCompletetdComponents);
