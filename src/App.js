import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tokenAuth from "./config/token";
import SignIn from "./components/paginas/auth/SignIn";
import SignUp from "./components/paginas/auth/SignUp";
import Admin from "./components/paginas/admin/Admin";
import AuthState from "./context/autenticacion/authState";
import AlertaState from "./context/alertas/alertaState";
import CategoriaState from "./context/categorias/categoriaState";

// revisar si existe token
const token = localStorage.getItem("token");
if (token) {
	tokenAuth(token);
}

function App() {
	return (
		<div>
			<CategoriaState>
				<AlertaState>
					<AuthState>
						<Router>
							<Switch>
								<Route exact path="/" component={SignIn} />
								<Route exact path="/registro" component={SignUp} />
								<Route path="/admin" component={Admin} />
							</Switch>
						</Router>
					</AuthState>
				</AlertaState>
			</CategoriaState>
		</div>
	);
}

export default App;
