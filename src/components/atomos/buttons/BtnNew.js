const BtnNew = ({ text, onBtn, style }) => {
	return (
		<button
			onClick={onBtn}
			type="button"
			className={`bg-white border-4 border-primario-purple rounded-md shadow-md p-4 px-12  hover:bg-primario-purple hover:text-white font-bold focus:outline-none z-30 tracking-widest  ${
				style ? style : "fixed bottom-10 right-10"
			}`}
		>
			{text}
		</button>
	);
};

export default BtnNew;
