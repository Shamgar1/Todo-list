import itemsEntities from "./items-entities-reducer";
import itemsView from "./items-view-reducer";
import visibilityFilter from "./visibility-filter-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	itemsEntities,
	itemsView,
	// visibilityFilter,
});

export default allReducers;
