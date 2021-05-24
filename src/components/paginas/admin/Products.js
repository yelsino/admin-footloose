import { useContext, useState } from "react";
import { useHistory } from "react-router";
import ProductoContext from "../../../context/productos/productoContext";
import UsuarioContext from "../../../context/usuarios/usuarioContext";
import BtnNew from "../../atomos/buttons/BtnNew";
import Search from "../../atomos/inputs/Search";
import Titulo from "../../atomos/texts/Titulo";
import CardProduct from "../../organismos/Cards/CardProduct";
import Filtro from "../../organismos/Filtro";

const Products = () => {
	// d CONTEXTOS
	const productoContext = useContext(ProductoContext);
	const {
		productos,
		obtenerProductoSeleccionado,
		obtenerPorGenero,
		actualizarProductoSeleccionado,
	} = productoContext;

	const usuarioContex = useContext(UsuarioContext);
	const { actualizarCuentaDeUsuario } = usuarioContex;

	const history = useHistory();

	// d ESTADOS
	const [buscar, setBuscador] = useState("");
	const [filtrado, setFiltrado] = useState([]);

	// d FUNCIONES
	const buscarPorNombre = async (e) => {
		e.persist();
		await setBuscador(e.target.value);

		filtrarElementos();
		console.log(buscar);
	};
	const filtrarElementos = () => {
		const busqueda = productos.filter((item) => {
			if (item.nombre.includes(buscar)) {
				return item;
			}
			if (item.codigo.includes(buscar)) {
				return item;
			}
		});
		setFiltrado(busqueda);
		console.log(filtrado);
	};
	const actualizarPorLote = () => {
		// productos.forEach((e) => {
		// 	actualizarProductoSeleccionado(e._id, {
		// 		creador: "60ab4e7ab77194468cda9adc",
		// 		actualizador: "60ab4e7ab77194468cda9adc",
		// 	});
		// });
	};

	const filtroHombre = () => obtenerPorGenero("60aaab3856f4230f27f530fe");
	const filtroMujer = () => obtenerPorGenero("60aaab3856f4230f27f530ff");
	const filtroNiños = () => obtenerPorGenero("60aaab3856f4230f27f53100");

	return (
		<div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-5">
			{/*  */}
			{/*  */}
			{/* <button onClick={actualizarPorLote} className="border-2 p-4">
				ACTUALIZAR POR LOTE
			</button> */}

			{/*  */}
			{/*  */}
			{/*  */}
			<Titulo text="PRODUCTOS" />
			<Search
				handleChange={buscarPorNombre}
				atributos={{
					id: "buscar",
					name: "buscar",
					type: "text",
					placeholder: "¿Que estas buscando?",
				}}
				style={""}
			/>
			<Filtro
				text={{
					uno: "HOMBRES",
					dos: "MUJERES",
					tres: "NIÑOS",
					cuatro: "",
				}}
				filtro1={filtroHombre}
				filtro2={filtroMujer}
				filtro3={filtroNiños}
				filtro4={() => {}}
			/>

			<div className="flex flex-wrap gap-5 mt-5 justify-center mb-36 opa ">
				<div
					id="vista_productos"
					className="flex flex-wrap justify-center mt-4 "
				>
					{filtrado.map((e) => (
						<CardProduct
							seleccionar={obtenerProductoSeleccionado}
							key={e._id}
							producto={e}
						/>
					))}
				</div>

				{productos.map((e) => (
					<CardProduct
						seleccionar={obtenerProductoSeleccionado}
						key={e._id}
						producto={e}
					/>
				))}
			</div>

			<BtnNew
				style={""}
				text={"NUEVO"}
				onBtn={() => {
					history.push("/admin/nuevo-producto");
				}}
			/>
		</div>
	);
};

export default Products;
