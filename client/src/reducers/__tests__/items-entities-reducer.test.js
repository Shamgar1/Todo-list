import itemsEntities from "../items-entities-reducer";
import { getTodo } from "../../actions/get-all-todos-action";
import { addAnotherItem } from "../../actions/add-todo-action";
import { deleteTodo } from "../../actions/delete-todo-action";
import { updateStatus } from "../../actions/toggle-todo-action";

// test("should return the initial state", () => {
// 	expect(itemsEntities(undefined, { type: undefined })).toEqual([
// 		{ todos: [] },
// 	]);
// });
test("should return the initial state", () => {
	expect(itemsEntities(undefined, { type: undefined })).toEqual({ todos: [] });
});

test("should handle a todo being added to an empty list", () => {
	const previousState = [];

	expect(itemsEntities(previousState, addAnotherItem("Run the tests"))).toEqual(
		[{ todos: "Run the tests" }]
	);
});

test("should handle a todo being added to an existing list", () => {
	const previousState = [{ todos: "Run the tests" }];

	expect(itemsEntities(previousState, addAnotherItem("Use Redux"))).toEqual([
		{ todos: "Run the tests" },
		{ todos: "Use Redux" },
	]);
});
test("should delete a todo from list", () => {
	const previousState = [{ todos: "Run the tests" }, { todos: "Use Redux" }];

	expect(itemsEntities(previousState, deleteTodo("Run the tests"))).toEqual([
		{ todos: "Use Redux" },
	]);
});
test("should update status of a todo from list", () => {
	const previousState = [{ todos: "Run the tests" }];

	expect(itemsEntities(previousState, updateStatus("Run the tests"))).toEqual([
		{ todos: "Run the tests" },
	]);
});
