// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import ListContainer from "../ListContainer";
// import { addButton } from "../list-controls-component/ListControlsComponent";
// import { Provider } from "react-redux";
// import { store } from "../../../store";

// const items = [
// 	{
// 		id: 56,
// 		name: "Take dog out for a walk",
// 		status: false,
// 	},
// 	{
// 		id: 32,
// 		name: "Do the dishes",
// 		status: true,
// 	},
// ];

// const unmockedFetch = global.fetch

// beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//       json: () => Promise.resolve([]),
//     })
// })

// afterAll(() => {
//   global.fetch = unmockedFetch
// })

// // This is actual testing suite
// describe('fetchItems', () => {
//   test('works', async () => {
//     const json = await fetchItems()
//     expect(Array.isArray(json)).toEqual(true)
//     expect(json.length).toEqual(items)
//   })
// })

// describe("ListContainer", () => {
// 	test("should render both items (one done and one not)", () => {
// 		render(
// 			<Provider store={store}>
// 				<ListContainer items={items} fetchItems={jest.fn(() => items)} />
// 			</Provider>
// 		);
//         const addNewTodo = screen.getByPlaceholderText("Add your new todo");

// 	fireEvent.change(addNewTodo, { target: { items } });
// 	fireEvent.click(addButton);

// 	await waitFor(() => {
// 		expect(screen.getByText(items)).toBeInTheDocument();
// 	});

// 	});
// });
