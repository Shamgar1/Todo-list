import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListContainer from "./ListContainer";
import {
	getItemsView,
	getIsLoading,
	getError,
} from "../../selectors/items-view-selectors";
import {
	getItemsEntities,
	getTodos,
} from "../../selectors/items-entities-selectors";
import { getTodo } from "../../actions/get-all-todos-action";

const mapStateToProps = (state, ownProps) => {
	const todos = getTodos(state);
	const isLoading = getIsLoading(state);
	const isError = getError(state);
	return {
		todos,
		isLoading,
		isError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getTodo }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
