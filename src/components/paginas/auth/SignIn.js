import React from "react";
import BtnPurple from "../../atomos/buttons/BtnPurple";
import InputPurple from "../../atomos/inputs/InputPurple";
import Logo from "../../atomos/Logo";
import TxtRed from "../../atomos/texts/TxtRed";
import imgLogin from "../../../static/img/login.svg";

const SignIn = () => {
	return (
		<div className=" flex max-w-7xl m-auto h-screen justify-center items-center ">
			<TxtRed text={"REGISTRARSE"} style={"absolute top-10 right-10"} />
			<form className="w-full flex flex-col justify-center items-center sm:left-20 sm:items-start relative z-30 lg:items-center lg:left-0 ">
				<Logo />
				<div className="flex flex-col my-4 mt-14">
					<TxtRed text={"CORREO"} />
					<InputPurple
						handleChange={() => {}}
						atributos={{
							id: "email",
							name: "email",
							type: "email",
							placeholder: "su correo aqui",
						}}
						style={""}
					/>
				</div>
				<div className="flex flex-col my-4">
					<TxtRed text={"CONTRASEÑA"} />
					<InputPurple
						handleChange={() => {}}
						atributos={{
							id: "email",
							name: "email",
							type: "email",
							placeholder: "su contraseña",
						}}
						style={""}
					/>
				</div>
				<BtnPurple text="INICIAR" />
			</form>
			<div className="w-1/3 m-20 hidden absolute z-0 md:flex right-20 lg:relative lg:w-1/2  lg:-ml-32 ">
				<img className="w-10/12" src={imgLogin} />
			</div>
		</div>
	);
};

export default SignIn;
