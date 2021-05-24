import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	OBTENER_PRODUCTOS,
	OBTENER_PRODUCTOS_CATEGORIAS,
	PRODUCTOS_ERROR,
	PRODUCTO_SELECCIONADO,
	ACTUALIZAR_PRODUCTO,
	CREAR_PRODUCTO,
} from "../../types";

import productoReducer from "./productoReducer";
import productoContext from "./productoContext";

const ProductoState = (props) => {
	const InitialState = {
		productos: [],
		productoslista: [],
		productoseleccionado: null,
	};

	// d dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(productoReducer, InitialState);

	//  d obtener todos los productos
	const obtenerProductos = async () => {
		try {
			const resultado = await clienteAxios.get("api/productos");
			console.log(resultado.data);
			dispatch({
				type: OBTENER_PRODUCTOS,
				payload: resultado.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCTOS_ERROR,
			});
		}
	};

	// d obtener productos por categoria
	const obtenerPorGenero = async (categoria) => {
		try {
			const resultado = await clienteAxios.get("api/productos/" + categoria);
			dispatch({
				type: OBTENER_PRODUCTOS_CATEGORIAS,
				payload: resultado.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCTOS_ERROR,
			});
		}
	};

	// d obtener producto seleccionado para añadir a lista
	const obtenerProductoSeleccionado = async (productoId) => {
		// const id = await productoId
		try {
			dispatch({
				type: PRODUCTO_SELECCIONADO,
				payload: productoId,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	// d actovar producto seleccionado
	const actualizarProductoSeleccionado = async (productoId, data) => {
		try {
			console.log(data);

			const resultado = await clienteAxios.put(
				`api/productos/${productoId}`,
				data
			);
			dispatch({
				type: ACTUALIZAR_PRODUCTO,
				payload: resultado.data,
			});
			// localStorage.setItem(
			// 	"producto_seleccionado",
			// 	JSON.stringify(resultado.data)
			// );
		} catch (error) {
			console.log(error.response);
		}
	};

	// d crear nuevo producto
	const eliminarProductoSeleccionado = async (productoId) => {
		try {
			const resultado = await clienteAxios.delete(
				`api/productos/${productoId}`
			);
			if (resultado.status === 200) {
				window.location.replace("http://localhost:3000/admin/productos/");
				const actualizar_productos = state.productos.filter(
					(e) => e._id !== productoId
				);
				dispatch({
					type: ACTUALIZAR_PRODUCTO,
					payload: actualizar_productos,
				});
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	// d crear nuevo producto
	const crearNuevoProducto = async (producto) => {
		try {
			const resultado = await clienteAxios.post("api/productos", producto, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			console.log(resultado.data.producto);

			dispatch({
				type: CREAR_PRODUCTO,
				payload: resultado.data.producto,
			});
		} catch (error) {}
	};

	return (
		<productoContext.Provider
			value={{
				productos: state.productos,
				productoseleccionado: state.productoseleccionado,
				productoslista: state.productoslista,
				obtenerProductos,
				obtenerPorGenero,
				obtenerProductoSeleccionado,
				crearNuevoProducto,
				actualizarProductoSeleccionado,
				eliminarProductoSeleccionado,
			}}
		>
			{props.children}
		</productoContext.Provider>
	);
};

export default ProductoState;
