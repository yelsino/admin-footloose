import {
	OBTENER_PRODUCTOS,
	OBTENER_PRODUCTOS_CATEGORIAS,
	PRODUCTOS_ERROR,
	PRODUCTO_SELECCIONADO,
	ACTUALIZAR_PRODUCTO,
	CREAR_PRODUCTO,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_PRODUCTOS_CATEGORIAS:
		case OBTENER_PRODUCTOS:
			return {
				...state,
				productos: action.payload,
			};

		case PRODUCTO_SELECCIONADO:
			const filtrar = state.productos.filter(
				(producto) => producto._id === action.payload
			)[0];
			localStorage.setItem("producto_seleccionado", JSON.stringify(filtrar));
			return {
				...state,
				productoseleccionado: filtrar,
			};

		case ACTUALIZAR_PRODUCTO:
			const actualziar = state.productos.filter(
				(e) => e._id !== action.payload._id
			);
			console.log(actualziar);
			return {
				...state,
				productos: [...actualziar, action.payload],
			};

		case CREAR_PRODUCTO:
			return {
				...state,
				productos: [...state.productos, action.payload],
			};

		default:
			return state;
	}
};
