import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
	OBTENER_USUARIO,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	REGISTRO_ERROR,
	CERRAR_SESION,
	BLOQUEAR,
} from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "../../context/autenticacion/authReducer";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		autenticado: null,
		usuario: null,
		mensaje: null,
		codigoverificacion: null,
		bloqueologin: false,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// d las funcioens
	const registrarUsuario = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("api/auth/signup", datos);
			console.log(respuesta.data);
			if (respuesta.data.msg) {
				dispatch({
					type: REGISTRO_ERROR,
					payload: respuesta.data,
				});
				setTimeout(() => {
					dispatch({
						type: REGISTRO_ERROR,
						payload: null,
					});
				}, 3000);
			} else if (respuesta.data.token) {
				dispatch({
					type: REGISTRO_ERROR,
					payload: { msg: "se ha creado tu cuenta" },
				});
				setTimeout(() => {
					dispatch({
						type: REGISTRO_ERROR,
						payload: null,
					});
					window.location.replace("http://localhost:3000/");
				}, 2000);
			}
			// dispatch({
			// 	type: REGISTRO_EXITOSO,
			// 	payload: respuesta.data,
			// });

			// obtener usuario autenticado
			// usuarioAutenticado();
		} catch (error) {
			console.log(error);

			dispatch({
				type: REGISTRO_ERROR,
			});
		}
	};

	// d retorna al usuario autenticado
	const usuarioAutenticado = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			tokenAuth(token);
		}
		try {
			const respuesta = await clienteAxios.get("api/auth");
			dispatch({
				type: OBTENER_USUARIO,
				payload: respuesta.data,
			});
		} catch (error) {
			dispatch({
				type: LOGIN_ERROR,
			});
		}
	};

	// d cuando el usuario iniciar sesion
	const iniciarSesion = async (datos) => {
		dispatch({
			type: BLOQUEAR,
			payload: true,
		});
		try {
			const respuesta = await clienteAxios.post("api/auth/signinadmin", datos);

			if (respuesta.data.token) {
				dispatch({
					type: LOGIN_EXITOSO,
					payload: respuesta.data,
				});
				dispatch({
					type: BLOQUEAR,
					payload: false,
				});
			} else {
				dispatch({
					type: LOGIN_ERROR,
					payload: respuesta.data.msg,
				});

				dispatch({
					type: BLOQUEAR,
					payload: false,
				});

				setTimeout(() => {
					dispatch({
						type: LOGIN_ERROR,
						payload: null,
					});
				}, 3000);
				return;
			}

			// Obtener al usuario
			usuarioAutenticado();
		} catch (error) {
			if (error.response !== 200) {
				dispatch({
					type: BLOQUEAR,
					payload: false,
				});
			}

			const alerta = error.response.data.msg;
			dispatch({
				type: LOGIN_ERROR,
				payload: alerta,
			});

			setTimeout(() => {
				dispatch({
					type: LOGIN_ERROR,
					payload: null,
				});
			}, 3000);
		}
	};

	// CIERRA LA SESION DEL USUARIO
	const cerrarSesion = () => {
		dispatch({
			type: CERRAR_SESION,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				codigoverificacion: state.codigoverificacion,
				bloqueologin: state.bloqueologin,
				registrarUsuario,
				iniciarSesion,
				usuarioAutenticado,
				cerrarSesion,
			}}
		>
			{" "}
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
