import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
	switch (action.type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...action.tweets, // Cambiado de action.tweet a action.tweets
			};
		case TOGGLE_TWEET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					likes: action.hasLiked
						? state[action.id].likes.filter((uid) => uid !== action.authUser)
						: state[action.id].likes.concat([action.authUser]),
				},
			};
		case ADD_TWEET:
			const { tweet } = action;

		default:
			return state;
	}
}
