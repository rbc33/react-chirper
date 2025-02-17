import { type } from "@testing-library/user-event/dist/type";
import Tweet from "../components/Tweet";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const receiveTweets = (tweet) => {
	return {
		type: RECEIVE_TWEETS,
		tweet,
	};
};
