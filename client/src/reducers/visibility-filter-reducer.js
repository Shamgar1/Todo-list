import { SHOW_COMPLETED_ITEMS, SHOW_NOT_COMPLETES_ITEMS } from "./index";

const initialState = {
	todos: [],
	error: false,
	isLoading: false,
};

export const onlyCompletedItems = (state = "SHOW_ALL", action) => {
	const { type, payload } = action;
	switch (type) {
		case "SHOW_COMPLETED_ITEMS":
			return { ...state, todos: [], error: false, isLoading: false, action };

		case "SHOW_NOT_COMPLETES_ITEMS":
			return { ...state, todos: [], error: false, isLoading: false, action };

		default:
			return state;
	}
};

// export default CompletedItemsActions;
