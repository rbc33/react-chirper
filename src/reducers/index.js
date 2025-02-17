import { combineReducers } from "redux";
import authUser from "./autheUsers";
import users from "./users";
import tweets from "./tweets";

export default combineReducers({
	authUser,
	users,
	tweets,
});
