import { useState } from "react";
import { Link } from "react-router-dom";
import TxtGray from "../../atomos/texts/TxtGray";
import TxtName from "../../atomos/texts/TxtName";
import TxtRed from "../../atomos/texts/TxtRed";

const CardProduct = ({ producto, seleccionar }) => {
	const {
		_id,
		marca,
		genero,
		nombre,
		categoria,
		imagen,
		carrito,
		likes,
		stock,
	} = producto;

	const [btn_detalle, showBtnDetalle] = useState(false);

	return (
		<div
			onClick={() => {
				showBtnDetalle(!btn_detalle);
				seleccionar(_id);
			}}
			className="shadow-md border w-52 h-80 p-4 relative pt-40 overflow-hidden flex flex-col justify-center  items-center text-sm rounded-md"
		>
			<TxtRed
				text={"s/ 255.50"}
				style="absolute top-3 z-30 right-3 text-lg font-semibold"
			/>
			<div className="absolute -top-0 z-0 w-52">
				<img src={imagen} />
			</div>
			<div className="relative z-30 mb-2">
				<TxtName
					nombre={nombre}
					categoria={categoria.nombre}
					genero={genero.nombre}
					marca={marca.nombre}
					style={""}
				/>
			</div>
			<div className="flex flex-col relative z-30 w-full">
				<label>
					<TxtGray text={"STOCK"} /> : {stock}
				</label>
				<label>
					<TxtGray text={"LIKES"} /> : {likes}
				</label>
				<label>
					<TxtGray text={"CARRITO"} /> : {carrito}
				</label>
			</div>
			{btn_detalle && (
				<div className=" bg-transparent w-full h-full absolute top-0 flex justify-center items-center z-30">
					<Link
						to={`/admin/productos/${_id}`}
						className=" tracking-widest bg-primario-purple py-2 px-6 rounded-md text-white font-semibold outline-none focus:outline-none"
					>
						DETALLE
					</Link>
				</div>
			)}
		</div>
	);
};

export default CardProduct;
