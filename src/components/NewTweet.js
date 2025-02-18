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
		<div>
			<h3 className="center">Compose new Tweet</h3>
			<form className="new-tweet" onSubmit={handleSubmit}>
				<textarea
					className="textarea"
					placeholder="What's happenin?"
					value={text}
					maxLength={280}
					onChange={handleChange}
				/>
				<button className="btn">SUBMIT</button>
			</form>
		</div>
	);
};

export default NewTweet;
