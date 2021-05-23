import imgSandalia from "../../../static/img/sandalia.jpg";
import BtnPurple from "../../atomos/buttons/BtnPurple";
import TxtGray from "../../atomos/texts/TxtGray";
import TxtName from "../../atomos/texts/TxtName";
import TxtRed from "../../atomos/texts/TxtRed";

const CardProduct = () => {
	return (
		<div className="shadow-md border w-52 h-72 p-4 relative pt-32 overflow-hidden flex flex-col justify-center  items-center text-sm rounded-md">
			<TxtRed text={"s/ 255.50"} style="absolute top-3 z-30 right-3" />
			<div className="absolute -top-7 z-0 w-52">
				<img src={imgSandalia} />
			</div>
			<div className="relative z-30 mb-2">
				<TxtName
					nombre={"RENZO RENZINI"}
					tipo={"SANDALIA"}
					genero={"HOMBRE"}
					marca={"CATERPILA"}
				/>
			</div>
			<div className="flex flex-col relative z-30 w-full">
				<label>
					<TxtGray text={"STOCK"} /> : 50
				</label>
				<label>
					<TxtGray text={"LIKES"} /> : 50
				</label>
				<label>
					<TxtGray text={"CARRITO"} /> : 50
				</label>
				<label>
					<TxtGray text={"PRECIO"} /> : A251234B
				</label>
			</div>
			<div className=" bg-transparent w-full h-full absolute top-0 flex justify-center items-center z-30">
				<button className="tracking-widest bg-primario-purple py-2 px-6 rounded-md text-white font-semibold outline-none focus:outline-none">
					DETALLE
				</button>
			</div>
		</div>
	);
};

export default CardProduct;
