import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

const App = ({ store, dispatch }) => {
	useEffect(() => {
		dispatch(handleInitialData());

		return () => {};
	}, []);

	return <div>Starter Code</div>;
};

export default connect()(App);
