import { useState } from "react";
import { useHistory } from "react-router";
import BtnNew from "../../atomos/buttons/BtnNew";
import Search from "../../atomos/inputs/Search";
import Titulo from "../../atomos/texts/Titulo";
import CardProduct from "../../organismos/Cards/CardProduct";
import Filtro from "../../organismos/Filtro";
import Modal from "../../plantillas/Modal";

const Products = () => {
	const [modalNew, setModalNew] = useState(false);
	const history = useHistory();
	return (
		<div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-5">
			<Titulo text="PRODUCTOS" />
			<Search
				handleChange={() => {}}
				atributos={{
					id: "email",
					name: "email",
					type: "email",
					placeholder: "¿Que estas buscando?",
				}}
				style={""}
			/>
			<Filtro
				text={{
					uno: "HOMBRES",
					dos: "MUJERES",
					tres: "NIÑOS",
					cuatro: "ACCESORIOS",
				}}
			/>

			<div className="flex flex-wrap gap-5 mt-5 justify-center mb-36 opa ">
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
			</div>

			<BtnNew
				text={"NUEVO"}
				onBtn={() => {
					history.push("/admin/nuevo-producto");
				}}
			/>

			{/* {modalNew && (
				<Modal style={"bg-gray-700 opacity-90"} position={""}>
					<div className="p-8 bg-white">CREANDO PRODUCTO</div>
				</Modal>
			)} */}
		</div>
	);
};

export default Products;
