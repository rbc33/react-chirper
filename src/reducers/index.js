import { combineReducers } from "redux";
import authUser from "./autheUsers";
import users from "./users";
import tweets from "./tweets";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
	authUser,
	users,
	tweets,
	loadingBar: loadingBarReducer,
});
