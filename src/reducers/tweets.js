import { RECEIVE_TWEETS } from "../actions/tweet";

export default function tweets(state = {}, action) {
	switch (action.type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...action.tweets, // Cambiado de action.tweet a action.tweets
			};
		default:
			return state;
	}
}
