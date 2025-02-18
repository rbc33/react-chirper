import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";
import { setAthedUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveTweets(tweets));
			dispatch(receiveUsers(users));
			dispatch(setAthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
};
