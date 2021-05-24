import Search from "../../atomos/inputs/Search";
import Titulo from "../../atomos/texts/Titulo";
import CardOrder from "../../organismos/Cards/CardOrder";
import Filtro from "../../organismos/Filtro";
import Modal from "../../plantillas/Modal";

const Orders = () => {
	return (
		<div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-5 relative z-30">
			<Titulo text="PEDIDOS" />
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
					uno: "NUEVOS",
					dos: "ATENDIDOS",
					tres: "DESPACHADOS",
					cuatro: "CANCELADOS",
				}}
				filtro1={() => {}}
				filtro2={() => {}}
				filtro3={() => {}}
				filtro4={() => {}}
			/>

			<div className="flex flex-wrap gap-5 mt-5 justify-center mb-36">
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
				<CardOrder />
			</div>
			<Modal style={"bg-gray-200 opacity-50 absolute"} position={"z-0"}>
				<div className="p-8 bg-white">EN CONSTRUCCION, REQUIRE TIENDA</div>
			</Modal>
		</div>
	);
};

export default Orders;
