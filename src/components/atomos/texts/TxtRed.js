const TxtRed = ({ text, style }) => {
	return (
		<label className={`text-primario-red tracking-wider ${style ? style : ""}`}>
			{text}
		</label>
	);
};

export default TxtRed;
