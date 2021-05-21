import TxtPurple from "../../atomos/texts/TxtPurple";

const CardOrder = () => {
	return (
		<div className="flex justify-center items-center shadow-md border bg-white p-8 rounded-md flex-col">
			<div className="text-gray-500  w-full flex justify-end">
				cod: <span className="text-black">A251234B</span>
			</div>
			<div className="my-3">
				<TxtPurple text={"ALVERTO MESAS TRUJILLO"} />
			</div>
			<div className=" w-full flex justify-between">
				<span>orden: 525</span> <span className="text-red-600">s/ 495.00</span>
			</div>
		</div>
	);
};

export default CardOrder;
