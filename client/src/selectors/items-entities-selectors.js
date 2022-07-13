// import { addTodo, deleteTodo, toggleTodo } from "../actions/add-todo-action";
// import { createSelector } from "reselect";
export const getItemsEntities = (state) => state.itemsEntities;

export const getTodos = (state) => getItemsEntities(state).todos;
