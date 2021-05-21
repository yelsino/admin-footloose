const InputPurple = ({ atributos, handleChange, style }) => {
	const onFocus = (event) => {
		if (event.target.autocomplete) {
			event.target.autocomplete = "whatever";
		}
	};
	return (
		<input
			onChange={handleChange}
			className={`  border-1 border-primario-purple p-4 outline-none rounded-md text-primario-purple ${
				style ? style : "border-4"
			}`}
			id={atributos.id}
			value={atributos.value}
			name={atributos.name}
			type={atributos.type}
			autoComplete="off"
			onFocus={onFocus}
			placeholder={atributos.placeholder}
			minLength={atributos.min}
			maxLength={atributos.max}
			readOnly={atributos.readOnly}
		/>
	);
};

export default InputPurple;
