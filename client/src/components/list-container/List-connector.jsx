import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListContainer from "./ListContainer";
import {
	getSearchItemsOnlySearched,
	getItemsView,
} from "../../selectors/items-view-selectors";
import { getTodoSucess } from "../../actions/get-all-todos-action";
import { searchSucsess } from "../../actions/search-items-action";

const mapStateToProps = (state, ownProps) => {
	const itemData = getItemsView(state);

	return {
		itemData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ getTodoSucess, searchSucsess, getTodoSucess },
		dispatch
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
