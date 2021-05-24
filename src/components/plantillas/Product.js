import React, { useContext, useState } from "react";
import BtnNew from "../atomos/buttons/BtnNew";
import Titulo from "../atomos/texts/Titulo";
import TxtPurple from "../atomos/texts/TxtPurple";
import { useHistory } from "react-router-dom";
import ProductoContext from "../../context/productos/productoContext";
import TxtName from "../atomos/texts/TxtName";
import CardAlerta from "../organismos/Cards/CardAlerta";
import Modal from "./Modal";
import moment from "moment";
import "moment/locale/es";

const Product = () => {
	// d CONTEXTO
	const productoContext = useContext(ProductoContext);
	const { eliminarProductoSeleccionado } = productoContext;

	// d Locasl Storage
	const productoLS = localStorage.getItem("producto_seleccionado");
	const producto = JSON.parse(productoLS);
	const {
		_id,
		marca,
		precio,
		genero,
		nombre,
		categoria,
		imagen,
		carrito,
		likes,
		stock,
		codigo,
		descripcion,
		alerta,
		createdAt,
		updatedAt,
		creador,
		actualizador,
	} = producto;

	const history = useHistory();
	// d ESTADOS
	const [opciones, showOpciones] = useState(false);
	const [modal, showModal] = useState(false);

	// d FUNCIONES
	const eliminarProducto = () => {
		eliminarProductoSeleccionado(_id);
	};

	return (
		<div className="m-5 w-full tracking-wider leading-loose  flex flex-col items-center ">
			<div className="w-full max-w-5xl ">
				<Titulo text={"#" + codigo}></Titulo>
				<TxtName
					style={" text-center text-xl"}
					categoria={categoria.nombre}
					nombre={nombre}
					marca={marca.nombre}
					genero={genero.nombre}
				/>
				{/* seccion 1 */}
				<div className="  w-full flex justify-end mr-40 items-end border-b-2 border-primario-purple mb-5  overflow-hidden h-40 relative z-30 mt-5">
					<div className="absolute left-20 z-10  -top-16">
						<img className="object-cover h-64" src={imagen} />
					</div>
					<div className=" h-full w-96 relative z-0 flex justify-center items-center  px-10">
						<p>{descripcion}</p>
					</div>
				</div>

				{/* datos de producto */}
				<div className=" border-b-2 border-primario-purple mb-7">
					<TxtPurple text={"DATOS PRODUCTO"} style={""} />
					<div className="flex  justify-between text-gray-700">
						<div>
							<p>
								Nombre: <span className="text-black">{nombre}</span>
							</p>
							<p>
								Categoria:{" "}
								<span className="text-black">{categoria.nombre}</span>
							</p>
							<p>
								Genero: <span className="text-black">{genero.nombre}</span>
							</p>
							<p>
								Marca: <span className="text-black">{marca.nombre}</span>
							</p>
						</div>
						<div className="mr-20 text-gray-700">
							<p>
								Stock: <span className="text-black">{stock}</span>
							</p>
							<p>
								Alerta: <span className="text-black">{alerta}</span>
							</p>
							<p>
								Precio: <span className="text-black">{precio}</span>
							</p>
							<p>
								Carrito: <span className="text-black">{carrito}</span>
							</p>
							<p>
								Likes: <span className="text-black">{likes}</span>
							</p>
						</div>
					</div>
				</div>
				<div className="">
					<TxtPurple text={"CREADOR"} style={""} />
					{/* <p>
						Creado por : <span>{creador.username && creador.username}</span>
					</p> */}
					{/* <p>
						Actualizado por:{" "}
						<span>{actualizador.username && actualizador.username}</span>
					</p> */}
					<p>
						Creacion: <span>{moment(createdAt).format("LLLL")}</span>
					</p>
					<p>
						Actualizacion: <span>{moment(updatedAt).format("LLLL")}</span>
					</p>
				</div>

				<div className="absolute z-30 bottom-10 right-10 bg-white">
					{opciones && (
						<ul className=" border border-primario-purple p-4 rounded-md">
							<li
								onClick={() => {
									history.push("/admin/nuevo-producto");
								}}
								className="border-b-2 border-primario-purple hover:bg-primario-purple hover:text-white font-semibold cursor-pointer px-4 py-1"
							>
								CREAR
							</li>

							<li
								onClick={() => {
									history.push("/admin/actualizar-producto");
								}}
								className="border-b-2 border-primario-purple hover:bg-primario-purple hover:text-white font-semibold cursor-pointer px-4 py-1"
							>
								ACTUALIZAR
							</li>
							<li
								onClick={() => {
									showModal(true);
								}}
								className="hover:bg-primario-purple hover:text-white font-semibold cursor-pointer px-4 py-1"
							>
								ELIMINAR
							</li>
						</ul>
					)}
					<BtnNew
						text={"OPCIONES"}
						style={"otros"}
						onBtn={() => {
							showOpciones(!opciones);
						}}
					/>
				</div>
			</div>
			{modal && (
				<Modal style={"bg-gray-700 opacity-90 "} position={"z-30"}>
					<CardAlerta
						botonAccion={eliminarProducto}
						botonCancelar={showModal}
						modal={modal}
						atributos={{
							titulo: "ELiminar Producto",
							name_boton_accion: "eliminar",
						}}
					>
						<div className="mt-2">
							<p className="text-sm text-gray-500">
								¿Estas seguro de eliminar este producto? <br></br> Esta accion
								es irreversible
								<br></br>
								todos los datos de este producto seran eliminados
								<br></br>
								del sistema
							</p>
						</div>
					</CardAlerta>
				</Modal>
			)}
		</div>
	);
};

export default Product;
