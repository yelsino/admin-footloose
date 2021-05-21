import ItemFiltro from "../moleculas/Items/ItemFIltro";

const Filtro = ({ text }) => {
	return (
		<ul className="flex justify-evenly  w-full mt-5">
			<ItemFiltro text={text.uno} />
			<ItemFiltro text={text.dos} />
			<ItemFiltro text={text.tres} />
			<ItemFiltro text={text.cuatro} />
		</ul>
	);
};

export default Filtro;
