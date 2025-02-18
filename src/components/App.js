import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";

const App = ({ dispatch, loading }) => {
	useEffect(() => {
		dispatch(handleInitialData());
		console.log(loading);

		return () => {};
	}, []);

	return (
		<div>
			<LoadingBar />
			{loading === true ? null : <Dashboard />}
		</div>
	);
};
const mapStatetoProps = (authUser) => ({
	loading: authUser === null,
});
export default connect(mapStatetoProps)(App);
