const TxtName = ({ nombre, marca, categoria, genero, style }) => {
	return (
		<p className={`text-primario-gray-500 tracking-wider ${style && style}`}>
			{categoria} <span className="text-primario-purple">{nombre}</span> {marca}{" "}
			{genero}
		</p>
	);
};

export default TxtName;
