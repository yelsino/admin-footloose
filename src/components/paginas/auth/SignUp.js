import React, { useContext, useEffect, useState } from "react";
import BtnPurple from "../../atomos/buttons/BtnPurple";
import InputPurple from "../../atomos/inputs/InputPurple";
import Logo from "../../atomos/Logo";
import TxtRed from "../../atomos/texts/TxtRed";
import imgLogin from "../../../static/img/login.svg";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/autenticacion/authContext";
import AlertaContext from "../../../context/alertas/alertaContext";

const SignUp = (props) => {
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje, autenticado, registrarUsuario } = authContext;

	// devolver mensajes
	useEffect(() => {
		if (autenticado) {
			props.history.push("/admin");
		}
	}, [mensaje, autenticado, props.history]);

	const [usuario, guardarUsuario] = useState({
		username: "",
		email: "",
		password: "",
		roles: ["moderador"],
	});
	const { email, password, username } = usuario;

	const onChangeInicio = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log("gaaaaaaaaa");
		if (!email || !password || !username) {
			mostrarAlerta("los campos no pueden estar vacios");
			return;
		}

		if (password.length < 6) {
			mostrarAlerta(
				"El password debe contener al menos 6 caracteres",
				"alerta-error"
			);
			return;
		}

		registrarUsuario(usuario);
	};

	return (
		<div className=" flex max-w-7xl m-auto h-screen justify-center items-center ">
			<Link to="/">
				<TxtRed
					text={"INICIAR SESION"}
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

				<div className="flex flex-col my-4">
					<TxtRed text={"NOMBRE DE USUARIO"} style={""} />
					<InputPurple
						handleChange={onChangeInicio}
						atributos={{
							id: "username",
							name: "username",
							type: "text",
							value: username,
							placeholder: "nombre de cuenta",
						}}
						style={""}
					/>
				</div>
				<div className="flex flex-col my-4 ">
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
					<TxtRed text={"CONTRASEÑA"} style={""} />
					<InputPurple
						handleChange={onChangeInicio}
						atributos={{
							id: "password",
							name: "password",
							type: "password",
							value: password,
							placeholder: "su contraseña",
						}}
						style={""}
					/>
				</div>
				<BtnPurple type={"submit"} text="REGISTRARSE" style={""} />
			</form>
			<div className="w-1/3 m-20 hidden absolute z-0 md:flex right-20 lg:relative lg:w-1/2  lg:-ml-32  flex-col  ">
				{alerta && (
					<p className="text-center -mt-20 rounded-md bg-primario-red px-8 py-4 font-medium text-white">
						{alerta.msg}
					</p>
				)}

				{mensaje && (
					<p className=" text-center -mt-20 rounded-md bg-primario-red px-8 py-4 font-medium text-white">
						{mensaje.msg}
					</p>
				)}
				<img alt="#" className="w-10/12" src={imgLogin} />
			</div>
		</div>
	);
};

export default SignUp;
