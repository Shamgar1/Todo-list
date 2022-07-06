import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "monday-ui-react-core/dist/main.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import { allReducers } from "../../client/src/reducers/items-entities-reducer";

// store.dispatch(itemsEntitiesReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </BrowserRouter> */}
	</React.StrictMode>
);
