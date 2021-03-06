const BtnPurple = ({ text, type, style }) => {
	return (
		<button
			type={type}
			className={`border-4 border-primario-purple py-3 text-center  my-3 text-primario-purple font-bold hover:bg-primario-purple hover:text-white rounded-md w-96 focus:outline-none  ${
				style && style
			}`}
		>
			{text}
		</button>
	);
};

export default BtnPurple;
