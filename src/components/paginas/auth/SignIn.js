import React from "react";
import BtnPurple from "../../atomos/buttons/BtnPurple";
import InputPurple from "../../atomos/inputs/InputPurple";
import Logo from "../../atomos/Logo";
import TxtRed from "../../atomos/texts/TxtRed";

const SignIn = () => {
	return (
		<>
			<Logo />
			<form className="m-32">
				<div className="flex flex-col">
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
				<div className="flex flex-col">
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
			<div>
				<img src="" />
			</div>
		</>
	);
};

export default SignIn;
