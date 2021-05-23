import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import CategoriaContext from "../../context/categorias/categoriaContext";
import InputPurple from "../atomos/inputs/InputPurple";
import Titulo from "../atomos/texts/Titulo";
import CardViewProducto from "../organismos/Cards/CardViewProducto";

const NewProduct = () => {
	const categoriaContext = useContext(CategoriaContext);
	const { categorias, obtenerCategorias } = categoriaContext;

	const [producto, setProducto] = useState({
		nombre: "",
		descripcion: "",
		categoria: "",
		genero: "",
		marca: "",
		stock: "",
		alerta: "",
		precio: "",
		imagen: "",
		tipo: "",
	});

	const {
		nombre,
		descripcion,
		categoria,
		genero,
		marca,
		stock,
		alerta: alertame,
		precio,
		imagen,
		tipo,
	} = producto;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		if (name === "imagen") {
			setProducto({
				...producto,
				imagen: e.target.files[0],
			});
		} else {
			setProducto({
				...producto,
				[name]: value,
			});
		}
		console.log(producto);
	};

	let formaData = new FormData();
	formaData.set("nombre", nombre);
	formaData.set("descripcion", descripcion);
	formaData.set("categoria", categoria);
	formaData.set("genero", genero);
	formaData.set("marca", marca);
	formaData.set("stock", stock);
	formaData.set("alerta", alerta);
	formaData.set("imagen", imagen);
	formaData.set("tipo", tipo);
	formaData.set("precio", precio);

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (
			!nombre ||
			!descripcion ||
			!categoria ||
			!genero ||
			!marca ||
			!stock ||
			!alertame ||
			!precio ||
			!imagen
		) {
			mostrarAlerta("todos los campos son obligatorios", "alerta-error");
			return;
		}
		if (alertame > stock) {
			mostrarAlerta(
				"la cantidad minima para alertar, debe ser menor al del stock",
				"alerta-error"
			);
			return;
		}

		if (Number(stock) < 0 || Number(alerta) < 0 || Number(precio) < 0) {
			mostrarAlerta("no se permiten valores negativos");
			return;
		}

		// crearNuevoProducto(formData);
	};

	return (
		<div className="flex  flex-col m-8 items-center w-full ">
			<Titulo text={"NUEVO PRODUCTO"} />
			<div className=" flex space-x-20 mt-10 w-full  justify-center">
				<button
					onClick={() => {
						obtenerCategorias();
					}}
				>
					EXTRAER
				</button>
				<div className="flex flex-col  max-w-sm w-full">
					{/* nombre */}
					<div className="flex flex-col mb-3">
						<label className="text-primario-red" htmlFor="nombre">
							Nombre
						</label>

						<InputPurple
							handleChange={handleChange}
							atributos={{
								id: "nombre",
								name: "nombre",
								type: "nombre",
								placeholder: "nombre del producto",
								value: nombre,
							}}
							style={"p-3"}
						/>
					</div>

					<div className="flex justify-between">
						{/* precio */}
						<div className="flex flex-col mb-3 w-40 relative justify-center">
							<label className="text-primario-red " htmlFor="precio">
								Precio
							</label>
							<label
								className="text-primario-purple absolute bottom-5 right-7 font-extrabold"
								htmlFor="precio"
							>
								S/
							</label>
							<InputPurple
								handleChange={handleChange}
								atributos={{
									id: "precio",
									name: "precio",
									type: "number",
									placeholder: "precio",
									value: precio,
								}}
								style={"p-3 appearance-none "}
							/>
						</div>
						{/* categoria */}
						<div className="flex flex-col mb-3 w-40">
							<label className="text-primario-red" htmlFor="categoria">
								Categoria
							</label>

							<select
								className="appearance-none  border-2 border-primario-purple outline-none rounded-md text-primario-purple mt-2 mb-2 py-3 text-center px-10 bg-white"
								onChange={handleChange}
								id="categoria"
								name="categoria"
								value={categoria}
							>
								{categorias.map((e) => (
									<option key={e._id} value={e.nombre}>
										{e.nombre}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="flex justify-between">
						{/* marca */}
						<div className="flex flex-col mb-3 w-40">
							<label className="text-primario-red" htmlFor="marca">
								Marca
							</label>

							<select
								onChange={handleChange}
								id="marca"
								name="marca"
								value={marca}
								className="appearance-none  border-2 border-primario-purple outline-none rounded-md text-primario-purple mt-2 mb-2 py-3 text-center px-10 bg-white"
							>
								<option value="marca1">marca 1</option>
								<option value="marca2">marca 1</option>
								<option value="marca3">marca 1</option>
								<option value="marca4">marca 1</option>
								<option value="marca5">marca 1</option>
							</select>
						</div>
						{/* genero */}
						<div className="flex flex-col mb-3 w-40">
							<label className="text-primario-red" htmlFor="genero">
								Genero
							</label>

							<select
								onChange={handleChange}
								id="genero"
								name="genero"
								value={genero}
								className="appearance-none  border-2 border-primario-purple outline-none rounded-md text-primario-purple mt-2 mb-2 py-3 text-center px-10 bg-white"
							>
								<option value="genero1">genero 1</option>
								<option value="genero1">genero 1</option>
								<option value="genero1">genero 1</option>
								<option value="genero1">genero 1</option>
								<option value="genero1">genero 1</option>
							</select>
						</div>
					</div>

					<div className="flex  justify-between">
						{/* stock */}
						<div className="flex flex-col mb-3 w-40">
							<label className="text-primario-red" htmlFor="stock">
								Stock
							</label>

							<InputPurple
								handleChange={handleChange}
								atributos={{
									id: "stock",
									name: "stock",
									type: "number",
									placeholder: "stock del producto",
									value: stock,
								}}
								style={" p-3"}
							/>
						</div>
						{/* alertame en  */}
						<div className="flex flex-col mb-3  w-40">
							<label className="text-primario-red" htmlFor="alerta">
								Alerta
							</label>

							<InputPurple
								handleChange={handleChange}
								atributos={{
									id: "alerta",
									name: "alerta",
									type: "number",
									placeholder: "alerta en!",
									value: alertame,
								}}
								style={" p-3"}
							/>
						</div>
					</div>
					{/* precio */}
					<div className="flex flex-col mb-3">
						<label className="text-primario-red">Descripcion</label>
						<textarea
							id="descripcion"
							name="descripcion"
							value={descripcion}
							onChange={handleChange}
							className="border-2 border-primario-purple rounded-md h-20 focus:outline-none p-4 text-primario-purple"
						/>
					</div>
					{/* imagen */}
				</div>
				<div className="">
					<div className="flex flex-col mb-3 w-full">
						<label className="text-primario-red" htmlFor="genero">
							Tipo Producto
						</label>

						<select
							onChange={handleChange}
							id="genero"
							name="genero"
							value={tipo}
							className="appearance-none  border-2 border-primario-purple outline-none rounded-md text-primario-purple mt-2 mb-2 py-3 text-center px-10 bg-white "
						>
							<option value="tipo1">tipo1 1</option>
							<option value="tipo2">tipo1 1</option>
							<option value="tipo3">tipo1 1</option>
							<option value="tipo4">tipo1 1</option>
							<option value="tipo5">tipo1 1</option>
						</select>
					</div>
					<CardViewProducto producto={producto} />
					<div className=" flex text-center mt-10">
						<input
							className="hidden  "
							type="file"
							placeholder="imagen de producto"
							id="file"
							accept="image/*"
							name="imagen"
							onChange={handleChange}
						/>
						<label
							className=" border-2 border-primario-purple outline-none rounded-md text-primario-purple w-full py-4 cursor-pointer"
							htmlFor="file"
						>
							Imagen
						</label>
					</div>
				</div>
			</div>
			<button
				type="button"
				onClick={onSubmitForm}
				className="absolute  bottom-10 right-10 border-2 border-primario-purple p-4 px-12 hover:bg-primario-purple rounded-md font-bold text-primario-purple hover:text-white shadow-md focus:outline-none bg-white"
			>
				crear
			</button>
		</div>
	);
};

export default NewProduct;
