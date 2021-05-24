import ItemFiltro from "../moleculas/Items/ItemFIltro";

const Filtro = ({ text, filtro1, filtro2, filtro3, filtro4 }) => {
	return (
		<ul className="flex justify-evenly  w-full mt-5">
			<ItemFiltro text={text.uno} onItem={filtro1} />
			<ItemFiltro text={text.dos} onItem={filtro2} />
			<ItemFiltro text={text.tres} onItem={filtro3} />
			{text.cuatro && <ItemFiltro text={text.cuatro} onItem={filtro4} />}
		</ul>
	);
};

export default Filtro;
