import { useContext } from "react";
import AlertaContext from "../../../context/alertas/alertaContext";
import UsuarioContext from "../../../context/usuarios/usuarioContext";
import Titulo from "../../atomos/texts/Titulo";
import ItemUser from "../../moleculas/Items/ItemUser";

const Users = () => {
	// d CONTEXTOS

	const usuariosContext = useContext(UsuarioContext);
	const { usuarios, obtenerUsuarioActual, actualizarCuentaDeUsuario } =
		usuariosContext;
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;
	return (
		<div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-5">
			<Titulo text="USUARIOS" />
			{/* <Search
				handleChange={() => {}}
				atributos={{
					id: "email",
					name: "email",
					type: "email",
					placeholder: "¿Que estas buscando?",
				}}
				style={""}
			/> */}
			{/* <Filtro
				text={{
					uno: "HOMBRES",
					dos: "MUJERES",
					tres: "NIÑOS",
					cuatro: "ACCESORIOS",
				}}
			/> */}

			<div className="flex flex-wrap  mt-5 justify-center mb-36 w-full">
				<div className="shadow-md rounded-lg py-4    p-4  w-full relative group flex justify-between border-2 border-primario-purple bg-primario-purple text-white font-bold">
					<span className="w-72 text-center">NOMBRES</span>
					<span className="w-40 text-center">ROL</span>
					<span className="w-40 text-center">CODIGO</span>
					<span className="w-40 text-center">ESTADO</span>
				</div>
				{usuarios.map((e) => (
					<ItemUser
						key={e._id}
						usuario={e}
						seleccionarUsuario={obtenerUsuarioActual}
						actualizarUsuario={actualizarCuentaDeUsuario}
						mostrarAlerta={mostrarAlerta}
					/>
				))}
			</div>
			{alerta && (
				<p className="absolute bottom-10 right-10 px-6 py-3 bg-primario-red rounded-sm text-white font-semibold">
					{alerta.msg}
				</p>
			)}
		</div>
	);
};

export default Users;
