import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ListContainer from "../ListContainer";
import { addButton } from "../list-controls-component/ListControlsComponent";
import { Provider } from "react-redux";
import { store } from "../../../store";

const items = [
	{
		id: 56,
		name: "Take dog out for a walk",
		status: false,
	},
	{
		id: 32,
		name: "Do the dishes",
		status: true,
	},
];

const unmockedFetch = global.fetch;

beforeAll(() => {
	global.fetch = () =>
		Promise.resolve({
			json: () => Promise.resolve([{}]),
		});
});

afterAll(() => {
	global.fetch = unmockedFetch;
});

describe("ListContainer", () => {
	test("should render both items (one done and one not)", () => {
		render(
			<Provider store={store}>
				<ListContainer items={items} getTodo={jest.fn(() => items)} />
			</Provider>
		);
	});
});
