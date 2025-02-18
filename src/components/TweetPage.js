import React from "react";
import { connect } from "react-redux";

const TweetPage = (props) => {
	console.log(props);

	return <div>TWEEE</div>;
};
const mapStateToProps = ({ authUser, tweets, users }, props) => {
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
