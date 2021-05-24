import { Link } from "react-router-dom";
import Logo from "../atomos/Logo";
import TxtGray from "../atomos/texts/TxtGray";

const NavBar = () => {
	return (
		<div className="relative w-60 h-screen">
			<nav className="fixed w-48 border border-primario-purple flex flex-col h-screen items-center px-4  z-40">
				<div className="my-5 ">
					<Logo />
				</div>
				<ul className="my-10 flex flex-col space-y-14">
					<Link to={"/admin/productos"}>
						<img alt="#" src="https://img.icons8.com/nolan/64/product.png" />
						<TxtGray text={"productos"} />
						<span className="border-b border-primario-purple block mt-1 "></span>
					</Link>

					<Link to={"/admin/pedidos"}>
						<img
							alt="#"
							src="https://img.icons8.com/nolan/64/commodity-turnover.png"
						/>
						<TxtGray text={"pedidos"} />
						<span className="border-b border-primario-purple block mt-1 "></span>
					</Link>
					<Link to={"/admin/usuarios"}>
						<img alt="#" src="https://img.icons8.com/nolan/64/conference.png" />
						<TxtGray text={"usuarios"} />
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
