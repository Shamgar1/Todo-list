import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.module";
// import "monday-ui-react-core/dist/main.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import { allReducers } from "../../client/src/reducers/index";

// store.dispatch(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
