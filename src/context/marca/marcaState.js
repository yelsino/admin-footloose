import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import { OBTENER_MARCAS } from "../../types";

import MarcaReducer from "./marcaReducer";
import MarcaContext from "./marcaContext";

const MarcaState = (props) => {
	const InitialState = {
		marcas: [],
		marca_actual: null,
	};

	const [state, dispatch] = useReducer(MarcaReducer, InitialState);

	// d obtener listas
	const obtenerMarcas = async () => {
		try {
			const resultado = await clienteAxios.get("api/marcas");
			console.log(resultado);
			dispatch({
				type: OBTENER_MARCAS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<MarcaContext.Provider
			value={{
				marcas: state.marcas,
				marca_actual: state.marca_actual,
				obtenerMarcas,
			}}
		>
			{props.children}
		</MarcaContext.Provider>
	);
};

export default MarcaState;
