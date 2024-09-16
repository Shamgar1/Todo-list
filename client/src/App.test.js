import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App.module";

test("renders learn react link", () => {
	render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
	const linkElement = screen.getByText(/Ayelet's List/i);
	expect(linkElement).toBeInTheDocument();
});