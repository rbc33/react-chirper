import { getInitialData } from "../utils/api";

export const handleInitialData = () => {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {});
	};
};
