import { useReducer } from "react";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";
import alertaContext from "./alertaContext";
import alertaReducer from "./alertaReducer";

const AlertaState = (props) => {
	const initialState = {
		alerta: null,
		card: false,
		alerta2: null,
	};

	const [state, dispatch] = useReducer(alertaReducer, initialState);

	// D FUNCIONES
	const mostrarAlerta = (msg, clase) => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: {
				msg,
				clase,
			},
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA,
			});
		}, 3000);
	};

	return (
		<alertaContext.Provider
			value={{
				alerta: state.alerta,
				card: state.card,
				alerta2: state.alerta2,
				mostrarAlerta,
			}}
		>
			{props.children}
		</alertaContext.Provider>
	);
};

export default AlertaState;
