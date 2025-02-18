import { useState } from "react";

const NewTweet = () => {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		const text = e.target.value;
		setText(text);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Add tweet to Store

		console.log("NewTweet: ", text);
		setText("");
	};

	return (
		<div className="new-tweet">
			<h3 className="center">Compose new Tweet</h3>
			<input className="textarea" onChange={handleChange}></input>
			<button className="btn" onClick={handleSubmit}>
				SUBMIT
			</button>
		</div>
	);
};

export default NewTweet;
