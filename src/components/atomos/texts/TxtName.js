const TxtName = ({ nombre, marca, tipo, genero }) => {
	return (
		<p className="text-primario-gray-500">
			{tipo} <span className="text-primario-purple">{nombre}</span> {marca}{" "}
			{genero}
		</p>
	);
};

export default TxtName;
