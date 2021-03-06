import { OBTENER_GENEROS } from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_GENEROS:
			return {
				...state,
				generos: action.payload,
			};

		default:
			return state;
	}
};
