const BtnNew = ({ text, onBtn }) => {
	return (
		<button
			onClick={onBtn}
			type="button"
			className="bg-white border-4 border-primario-purple rounded-md shadow-md p-4 px-12 fixed bottom-10 right-10 hover:bg-primario-purple hover:text-white font-bold focus:outline-none "
		>
			{text}
		</button>
	);
};

export default BtnNew;
