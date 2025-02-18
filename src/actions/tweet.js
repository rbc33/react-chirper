export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS, // Usar la constante en lugar del string
		tweets,
	};
}
