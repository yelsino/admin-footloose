import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import { OBTENER_CATEGORIAS } from "../../types";

import CategoriaReducer from "./categoriaReducer";
import CategoriaContext from "./categoriaContext";

const CategoriaState = (props) => {
	const InitialState = {
		categorias: [],
		categoria_actual: null,
	};

	const [state, dispatch] = useReducer(CategoriaReducer, InitialState);

	// d obtener listas
	const obtenerCategorias = async () => {
		try {
			const resultado = await clienteAxios.get("api/categorias");
			console.log(resultado);
			dispatch({
				type: OBTENER_CATEGORIAS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<CategoriaContext.Provider
			value={{
				categorias: state.categorias,
				categoria_actual: state.categoria_actual,
				obtenerCategorias,
			}}
		>
			{props.children}
		</CategoriaContext.Provider>
	);
};

export default CategoriaState;
