import { SHOW_COMPLETED_ITEMS, SHOW_NOT_COMPLETES_ITEMS } from "./index";

export const onlyCompletedItems = (filter) => {
	return {
		type: "SHOW_COMPLETED_ITEMS",
		filter,
	};
};
export const notCompletedItems = (filter) => {
	return {
		type: "SHOW_NOT_COMPLETES_ITEMS",
		filter,
	};
};
