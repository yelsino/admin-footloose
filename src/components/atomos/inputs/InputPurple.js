const InputPurple = ({ atributos, handleChange, style }) => {
	const onFocus = (event) => {
		if (event.target.autocomplete) {
			event.target.autocomplete = "whatever";
		}
	};
	return (
		<input
			onChange={handleChange}
			className={`  border-2 border-primario-purple outline-none rounded-md text-primario-purple mt-2 mb-2  ${
				style ? style : "w-96 p-4"
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
