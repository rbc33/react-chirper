import { combineReducers } from "redux";
import authedUser from "./autheUsers";
import users from "./users";
import tweets from "./tweets";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
	authedUser,
	users,
	tweets,
	loadingBar: loadingBarReducer,
});
