const ItemUser = ({
	usuario,
	seleccionarUsuario,
	actualizarUsuario,
	mostrarAlerta,
}) => {
	const { _id, username, estado, codigo, roles } = usuario;

	return (
		<div className="shadow-md rounded-lg    p-4  w-full   flex justify-between border-2  bg-white hover:bg-purple-100 ">
			<span className="w-72 text-center border-r-2 border-primario-purple">
				{username}
			</span>
			<span className="w-40 text-center border-r-2 border-primario-purple  ">
				{roles[0].name}
			</span>
			<span className="w-40 text-center border-r-2 border-primario-purple">
				{codigo}
			</span>
			<div className="w-40 text-center ">
				<span
					onClick={() => {
						if (roles[0].name === "admin") {
							mostrarAlerta("no puedes modificar un rol ADMIN", "");
							return;
						}
						const DATA = {
							estado: !estado,
						};
						setTimeout(() => {
							actualizarUsuario(_id, DATA);
						}, 300);
					}}
					className={`  py-2 px-3 rounded-md text-white font-bold cursor-pointer tracking-wider ${
						estado ? "bg-primario-purple" : "bg-primario-red"
					}`}
				>
					{estado ? "activo" : "inactivo"}
				</span>
			</div>
		</div>
	);
};

export default ItemUser;
