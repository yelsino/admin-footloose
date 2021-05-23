import Search from "../../atomos/inputs/Search";
import Titulo from "../../atomos/texts/Titulo";
import ItemUser from "../../moleculas/Items/ItemUser";
import CardProduct from "../../organismos/Cards/CardProduct";
import Filtro from "../../organismos/Filtro";

const Users = () => {
	return (
		<div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-5">
			<Titulo text="USUARIOS" />
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

			<div className="flex flex-wrap  mt-5 justify-center mb-36 w-full">
				<div className="shadow-md rounded-lg py-4    p-4  w-full relative group flex justify-between border-2 border-primario-purple bg-primario-purple text-white font-bold">
					<span className="w-96 text-center">NOMBRES</span>
					<span className="w-40 text-center">ROL</span>
					<span className="w-40 text-center">CODIGO</span>
					<span className="w-40 text-center">TOTAL</span>
				</div>
				<ItemUser />
				<ItemUser />
				<ItemUser />
				<ItemUser />
				<ItemUser />
				<ItemUser />
			</div>
		</div>
	);
};

export default Users;
