import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	OBTENER_USUARIOS,
	SELECCIONAR_USUARIO,
	ACTUALIZAR_CUENTA,
} from "../../types";

import UsuarioContext from "./usuarioContext";
import UsuarioReducer from "./usuarioReducer";

const UsuarioState = (props) => {
	const InitialState = {
		usuarios: [],
		usuario: null,
		usuario_pedido: null,
	};

	// d dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(UsuarioReducer, InitialState);

	// d obtener reclamos
	const obtenerUsuarios = async () => {
		try {
			const resultado = await clienteAxios.get("api/users");
			dispatch({
				type: OBTENER_USUARIOS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	// d obtener reclamo actual
	const obtenerUsuarioActual = async (usuarioId) => {
		try {
			const id = await usuarioId;
			dispatch({
				type: SELECCIONAR_USUARIO,
				payload: id,
			});
		} catch (error) {
			console.log(error.response);
		}
	};
	// d actualziar cuenta de usuario
	const actualizarCuentaDeUsuario = async (usuarioId, datos) => {
		try {
			const resultado = await clienteAxios.put(`api/users/${usuarioId}`, datos);
			if (resultado.data._id) {
				dispatch({
					type: ACTUALIZAR_CUENTA,
					payload: resultado.data,
				});
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<UsuarioContext.Provider
			value={{
				usuarios: state.usuarios,
				usuario: state.usuario,
				usuario_pedido: state.usuario_pedido,
				obtenerUsuarios,
				obtenerUsuarioActual,
				actualizarCuentaDeUsuario,
			}}
		>
			{props.children}
		</UsuarioContext.Provider>
	);
};

export default UsuarioState;
