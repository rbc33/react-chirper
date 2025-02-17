import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";
import { setAthedUser } from "./authUser";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
	return (dispatch) => {
		// Asegurarse de que authUser es null al inicio
		dispatch(setAthedUser(null));

		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveTweets(tweets));
			dispatch(receiveUsers(users));
			// Establecer el usuario autenticado después de cargar los datos
			dispatch(setAthedUser(AUTHED_ID));
		});
	};
};
