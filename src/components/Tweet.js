import React from "react";
import {
	TiArrowBackOutline,
	TiHeartFullOutline,
	TiHeartOutline,
} from "react-icons/ti";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleToggleTweet } from "../actions/tweets";
import { formatDate, formatTweet } from "../utils/helpers";

const Tweet = ({ authUser: authedUser, tweet, dispatch }) => {
	const navigate = useNavigate();
	const toParent = (e, id) => {
		e.preventDefault();
		navigate(`/tweet/${id}`);
	};
	const handleLike = (e) => {
		e.preventDefault();
		dispatch(
			handleToggleTweet({
				id: tweet.id,
				hasLiked: tweet.hasLiked,
				authedUser,
			})
		);
	};
	if (tweet === null) return <p>This Tweet don't exist</p>;

	const {
		name,
		avatar,
		timestamp,
		text,
		likes,
		hasLiked,
		replies,
		parent,
		id,
	} = tweet;

	return (
		<Link to={`/tweet/${id}`} className="tweet">
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
		</Link>
	);
};
const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
	const tweet = tweets[id];
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
	return {
		authedUser,
		tweet:
			tweet && users[tweet.author]
				? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
				: null,
	};
};
export default connect(mapStateToProps)(Tweet);
