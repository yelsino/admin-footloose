import TxtName from "../../atomos/texts/TxtName";
import TxtPurple from "../../atomos/texts/TxtPurple";
import IconHeart from "../../atomos/icons/IconHeart";

const CardViewProducto = ({ producto }) => {
	const { marca, precio, genero, nombre, categoria, imagen } = producto;
	return (
		<div className="border shadow-md rounded-md p-4 w-72 h-96 relative flex flex-col items-center overflow-hidden justify-between ">
			<div className="relative z-30  flex ">
				<div className="w-1/2">
					<TxtName
						nombre={nombre}
						marca={marca}
						categoria={categoria}
						genero={genero}
						style={"leading-tight"}
					/>
				</div>
				<div className="w-1/2"></div>
			</div>
			<img
				alt="#"
				src={typeof imagen === "object" ? URL.createObjectURL(imagen) : imagen}
				className="absolute z-0 w-10/12  bottom-20"
			/>
			<TxtPurple
				style={"absolute bottom-20 z-30 font-bold"}
				text={`s/  ${precio} `}
			/>

			<button className="px-6 py-2 rounded-md hover:bg-primario-purple hover:border-primario-purple border hover:text-white mt-8 relative z-30">
				¡LO QUIERO!
			</button>
			<IconHeart style={"absolute top-5 right-5 z-30"} />
		</div>
	);
};

export default CardViewProducto;
