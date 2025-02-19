import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
	const navigate = useNavigate();
	const [text, setText] = useState("");

	const handleChange = (e) => {
		const text = e.target.value;
		setText(text);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleAddTweet(text, id));

		setText("");
		navigate("/");
	};
	const tweetLeft = 280 - text.length;
	return (
		<div>
			<h3 className="center">Compose new Tweet</h3>
			<form className="new-tweet" onSubmit={handleSubmit}>
				{/* redirect to / onSubmit */}
				<textarea
					className="textarea"
					placeholder="What's happenin?"
					value={text}
					maxLength={280}
					onChange={handleChange}
				/>
				{tweetLeft <= 100 && <div className="tweet-lenght">{tweetLeft}</div>}
				<button className="btn" type="submit" disabled={text === ""}>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default connect()(NewTweet);
