import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

const TweetPage = (props) => {
	console.log(props);

	return (
		<div>
			<Tweet id={props.id} />
			<NewTweet id={props.id} />
			{props.replies && <h3 className="center">Replies</h3>}
			<ul>
				{props.replies.map((id) => (
					<li key={id}>
						<Tweet id={id} />
					</li>
				))}
			</ul>
		</div>
	);
};
const mapStateToProps = ({ authedUser, tweets, users }, props) => {
	const { id } = props.match.params;
	return {
		id,
		replies: !tweets[id]
			? []
			: tweets[id].replies.sort(
					(a, b) => tweets[b].timestamp - tweets[a].timestamp
			  ),
	};
};
export default connect(mapStateToProps)(TweetPage);
