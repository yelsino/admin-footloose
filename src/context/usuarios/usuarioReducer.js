import {
	OBTENER_USUARIOS,
	SELECCIONAR_USUARIO,
	ACTUALIZAR_CUENTA,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_USUARIOS:
			return {
				...state,
				usuarios: action.payload,
			};
		case SELECCIONAR_USUARIO:
			const usuario_seleccionado = state.usuarios.filter(
				(usuario) => usuario._id === action.payload
			);
			localStorage.setItem(
				"usuario_seleccionado",
				JSON.stringify(usuario_seleccionado)
			);

		case ACTUALIZAR_CUENTA:
			const usuarios = state.usuarios.filter(
				(e) => e._id !== action.payload._id
			);
			return {
				...state,
				usuarios: [...usuarios, action.payload],
			};
		default:
			return state;
	}
};
