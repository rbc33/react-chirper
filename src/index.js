import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { Provider } from "react-redux";
import middleware from "./middleware";

// const store = createStore(reducer, middleware);
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
