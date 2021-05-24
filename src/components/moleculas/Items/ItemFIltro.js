import TxtGray from "../../atomos/texts/TxtGray";

const ItemFiltro = ({ text, onItem }) => {
	return (
		<li
			onClick={onItem}
			className="hover:border-primario-purple border-b-2 border-white cursor-pointer"
		>
			<TxtGray text={text} />
		</li>
	);
};

export default ItemFiltro;
