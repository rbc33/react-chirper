import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
	useEffect(() => {
		let unmounted = false;
		props.dispatch(handleInitialData());

		return () => {
			unmounted = true;
		};
	}, []);

	return <div>Starter Code</div>;
};

export default connect()(App);
