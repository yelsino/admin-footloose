const TxtPurple = ({ text, style }) => {
	return (
		<p className={`text-primario-purple tracking-widest ${style && style}`}>
			{text}
		</p>
	);
};

export default TxtPurple;
