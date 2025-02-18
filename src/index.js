import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { Provider } from "react-redux";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";

// const store = createStore(reducer, middleware);
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
