import NavBar from "../../organismos/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";
import Orders from "./Orders";
const Admin = () => {
	return (
		<div>
			<Router>
				<div className="flex ">
					<NavBar />
					<div className="flex w-full">
						<Switch>
							<Route exact path={"/admin/productos"} component={Products} />
							<Route path={"/admin/usuarios"} component={Users} />
							<Route path={"/admin/pedidos"} component={Orders} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default Admin;
