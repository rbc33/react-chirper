import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
	useEffect(() => {
		dispatch(handleInitialData());
		console.log(loading);

		return () => {};
	}, []);

	return <div>{loading ? <h3>Loading...</h3> : <Dashboard />}</div>;
};
const mapStatetoProps = (authUser) => ({
	loading: authUser === null,
});
export default connect(mapStatetoProps)(App);
