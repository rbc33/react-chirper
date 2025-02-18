import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const receiveTweets = (tweets) => {
	return {
		type: RECEIVE_TWEETS, // Usar la constante en lugar del string
		tweets,
	};
};
export const addTweet = (tweet) => {
	return {
		type: ADD_TWEET,
		tweet,
	};
};

const toggleTweet = ({ id, authUser, hasLiked }) => {
	return {
		type: TOGGLE_TWEET,
		id,
		authUser,
		hasLiked,
	};
};

export const handleToggleTweet = (info) => {
	return (dispatch) => {
		dispatch(toggleTweet(info));
		return saveLikeToggle(info).catch((e) => {
			console.warn("Error in handleToggleTweet: ", e);
			dispatch(toggleTweet(info));
			alert("There was an error liking the tweet. Try again.");
		});
	};
};

export const handleAddTweet = (text, replyingTo) => {
	return (dispatch, getState) => {
		const { authUser } = getState;
		dispatch(showLoading());
		return saveTweet({
			text,
			author: authUser,
			replyingTo,
		})
			.then((tweet) => dispatch(addTweet(tweet)))
			.then(() => dispatch(hideLoading()));
	};
};
