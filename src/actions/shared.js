import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";
import { setAthedUser } from "./authUser";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveTweets(tweets));
			dispatch(receiveUsers(users));
			dispatch(setAthedUser(AUTHED_ID));
		});
	};
};
