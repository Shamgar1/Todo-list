import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getItemsView } from "../../../selectors/items-view-selectors";

import { ListSearch } from "./ListSearch";
import { searchTodo } from "../../../actions/search-items-action";

const mapStateToProps = (state, ownProps) => {
	const searchedItems = {};
	return {
		searchedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ searchTodo }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSearch);
