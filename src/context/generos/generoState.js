import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import { OBTENER_GENEROS } from "../../types";

import GeneroReducer from "./generoReducer";
import GeneroContext from "./generoContext";

const GeneroState = (props) => {
	const InitialState = {
		generos: [],
		genero_actual: null,
	};

	const [state, dispatch] = useReducer(GeneroReducer, InitialState);

	// d obtener listas
	const obtenerGeneros = async () => {
		try {
			const resultado = await clienteAxios.get("api/generos");
			console.log(resultado);
			dispatch({
				type: OBTENER_GENEROS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<GeneroContext.Provider
			value={{
				generos: state.generos,
				genero_actual: state.genero_actual,
				obtenerGeneros,
			}}
		>
			{props.children}
		</GeneroContext.Provider>
	);
};

export default GeneroState;
