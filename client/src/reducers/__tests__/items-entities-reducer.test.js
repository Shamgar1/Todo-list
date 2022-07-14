import itemsEntities from "../items-entities-reducer";
import { getTodo } from "../../actions/get-all-todos-action";
import { addAnotherItem } from "../../actions/add-todo-action";
import { deleteTodo } from "../../actions/delete-todo-action";
import { updateStatus } from "../../actions/toggle-todo-action";

test("should return the initial state", () => {
	expect(itemsEntities(undefined, { type: undefined })).toEqual({ todos: [] });
});

test("should handle a todo being added to an empty list", async () => {
	const previousState = [];
	expect(
		itemsEntities(previousState, {
			type: "ADD_TODO_SUCESS",
			todos: "Run the tests",
		})
	).toEqual({ todos: "Run the tests" });
});

test("should handle a todo being added to an existing list", () => {
	const previousState = { todos: "Run the tests" };

	expect(
		itemsEntities(previousState, {
			type: "ADD_TODO_SUCESS",
			todos: "Use Redux",
		})
	).toEqual({ todos: "Run the tests", todos: "Use Redux" });
});
test("should delete a todo from list", () => {
	const previousState = {
		todos: [
			{ itemName: "Use Redux", id: 1 },
			{ itemName: "blabla", id: 2 },
		],
	};
	expect(
		itemsEntities(previousState, {
			type: "DELETE_TODO_SUCESS",
			todos: { itemName: "blabla", id: 2 },
		})
	).toEqual({ todos: [{ itemName: "Use Redux", id: 1 }] });
});
test("should update status of a todo from list", () => {
	const previousState = {
		todos: [{ itemName: "Run the tests", status: false }],
	};
	expect(
		itemsEntities(previousState, {
			type: "TOGGLE_TODO_SUCESS",
			todos: [{ itemName: "Run the tests", status: true }],
		})
	).toEqual({
		todos: [{ itemName: "Run the tests", status: true }],
	});
});
