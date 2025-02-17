const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log("the action: ", action);
	const returnVal = next(action);
	console.log("The new state: ", store.getState());
	console.groupEnd();
	return returnVal;
};

export default logger;
