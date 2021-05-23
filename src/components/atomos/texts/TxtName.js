const TxtName = ({ nombre, marca, tipo, genero, style }) => {
	return (
		<p className={`text-primario-gray-500 tracking-wider ${style && style}`}>
			{tipo} <span className="text-primario-purple">{nombre}</span> {marca}{" "}
			{genero}
		</p>
	);
};

export default TxtName;
