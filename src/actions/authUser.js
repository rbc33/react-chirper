export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAthedUser = (id) => {
	return {
		type: SET_AUTHED_USER,
		id,
	};
};
