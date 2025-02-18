import React from "react";
import {
	TiArrowBackOutline,
	TiHeartFullOutline,
	TiHeartOutline,
} from "react-icons/ti";
import { connect } from "react-redux";
import { formatDate, formatTweet } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";

const Tweet = ({ authUser, tweet, dispatch }) => {
	const toParent = (e, id) => {
		e.preventDefault();
		// Todo: Redirect to parent Tweet
	};
	const handleLike = (e) => {
		e.preventDefault();
		dispatch(
			handleToggleTweet({
				id: tweet.id,
				hasLiked: tweet.hasLiked,
				authUser,
			})
		);
	};
	if (tweet === null) return <p>This Tweet don't exist</p>;

	const { name, avatar, timestamp, text, likes, hasLiked, replies, parent } =
		tweet;

	return (
		<div className="tweet">
			<img src={avatar} alt={`avatar of ${name}`} className="avatar" />
			<div className="tweet-info">
				<div>
					<span>{name}</span>
					<div>{formatDate(timestamp)}</div>
					{parent && (
						<button
							className="replying-to"
							onClick={(e) => {
								toParent(e, parent.id);
							}}
						>
							Replying to @{parent.author}
						</button>
					)}
					<p>{text}</p>
				</div>
				<div className="tweet-icons">
					<TiArrowBackOutline className="tweet-icon" />
					<span>{replies !== 0 && replies}</span>
					<button className="heart-button" onClick={handleLike}>
						{hasLiked ? (
							<TiHeartFullOutline color="#e0245e" className="tweet-icon" />
						) : (
							<TiHeartOutline className="tweet-icon" />
						)}
					</button>
					<span>{likes !== 0 && likes}</span>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
	const tweet = tweets[id];
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
	return {
		authUser,
		tweet:
			tweet && users[tweet.author]
				? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
				: null,
	};
};
export default connect(mapStateToProps)(Tweet);
