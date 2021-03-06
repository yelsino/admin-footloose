import React, { useContext, useEffect, useState } from "react";
import BtnPurple from "../../atomos/buttons/BtnPurple";
import InputPurple from "../../atomos/inputs/InputPurple";
import Logo from "../../atomos/Logo";
import TxtRed from "../../atomos/texts/TxtRed";
import imgLogin from "../../../static/img/login.svg";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/autenticacion/authContext";
import AlertaContext from "../../../context/alertas/alertaContext";
import SpinCarga from "../../atomos/animaciones/SpinCarga";

const SignIn = (props) => {
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje, bloqueologin, autenticado, iniciarSesion } = authContext;

	// devolver mensajes
	useEffect(() => {
		if (autenticado) {
			props.history.push("/admin/productos");
		}
	}, [mensaje, autenticado, props.history]);

	const [usuario, guardarUsuario] = useState({
		email: "",
		password: "",
	});
	const { email, password } = usuario;

	const onChangeInicio = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			mostrarAlerta("los campos no pueden estar vacios");
			return;
		}
		console.log(email, password);
		iniciarSesion({ email, password });
	};

	return (
		<div className=" flex max-w-7xl m-auto h-screen justify-center items-center ">
			<Link to="/registro">
				<TxtRed
					text={"REGISTRARSE"}
					style={
						"absolute top-10 right-10 cursor-pointer hover:text-primario-purple"
					}
				/>
			</Link>
			<form
				onSubmit={onSubmit}
				className="w-full flex flex-col justify-center items-center sm:left-20 sm:items-start relative z-30 lg:items-center lg:left-0 "
			>
				<Logo />
				<div className="flex flex-col my-4 mt-14">
					<TxtRed text={"CORREO"} style={""} />
					<InputPurple
						handleChange={onChangeInicio}
						atributos={{
							id: "email",
							name: "email",
							type: "email",
							placeholder: "su correo aqui",
							value: email,
						}}
						style={""}
					/>
				</div>

				<div className="flex flex-col my-4">
					<TxtRed text={"CONTRASE??A"} style={""} />
					<InputPurple
						handleChange={onChangeInicio}
						atributos={{
							id: "password",
							name: "password",
							type: "password",
							value: password,
							placeholder: "su contrase??a",
						}}
						style={""}
					/>
				</div>
				<div className="relative flex justify-center items-center ">
					<BtnPurple
						style={""}
						type={"submit"}
						text={`${bloqueologin ? "INICIANDO" : "INICIAR"}`}
					/>
				</div>
				{bloqueologin && (
					<div className="flex justify-center items-center w-96 mt-3 ">
						<SpinCarga texto={"validando..."} />
					</div>
				)}
			</form>
			<div className="w-1/3 m-20 hidden absolute z-0 md:flex right-20 lg:relative lg:w-1/2  lg:-ml-32  flex-col">
				{mensaje && (
					<p className="rounded-md bg-primario-red px-8 py-4 font-medium text-white">
						{mensaje}
					</p>
				)}
				<img alt="#" className="w-10/12" src={imgLogin} />
			</div>
		</div>
	);
};

export default SignIn;
