import NavBar from "../../organismos/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";
import Orders from "./Orders";
import NewProduct from "../../plantillas/NewProduct";
import { useContext, useEffect } from "react";
import ProductoContext from "../../../context/productos/productoContext";
import Product from "../../plantillas/Product";
import ActualizarProducto from "../../plantillas/ActualizarProducto";
import UsuarioContext from "../../../context/usuarios/usuarioContext";
const Admin = () => {
	// D CONTEXTOS
	const productoContext = useContext(ProductoContext);
	const { obtenerProductos } = productoContext;
	const usuariosContext = useContext(UsuarioContext);
	const { obtenerUsuarios } = usuariosContext;

	useEffect(() => {
		obtenerProductos();
		obtenerUsuarios();
	}, []);
	return (
		<div>
			<Router>
				<div className="flex ">
					<NavBar />
					<div className="flex w-full">
						<Switch>
							<Route exact path={"/admin/productos"} component={Products} />
							<Route
								path={"/admin/productos/:productoId"}
								component={Product}
							/>
							<Route path={"/admin/usuarios"} component={Users} />
							<Route path={"/admin/pedidos"} component={Orders} />
							<Route path={"/admin/nuevo-producto"} component={NewProduct} />
							<Route
								path={"/admin/actualizar-producto"}
								component={ActualizarProducto}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default Admin;
