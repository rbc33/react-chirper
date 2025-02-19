import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

const App = ({ dispatch, loading }) => {
	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	return (
		<>
			<LoadingBar />
			<div className="container">
				<Nav />
				{loading ? null : (
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/tweet/:id" element={<TweetPage />} />
						<Route path="/new" element={<NewTweet />} />
					</Routes>
				)}
			</div>
		</>
	);
};
const mapStatetoProps = (authedUser) => ({
	loading: authedUser === null,
});
export default connect(mapStatetoProps)(App);
