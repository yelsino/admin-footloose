import Search from "../../atomos/inputs/Search";
import Titulo from "../../atomos/texts/Titulo";
import CardProduct from "../../organismos/Cards/CardProduct";
import Filtro from "../../organismos/Filtro";

const Products = () => {
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

			<div className="flex flex-wrap gap-5 mt-5 justify-center mb-36">
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
			</div>
		</div>
	);
};

export default Products;
