import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/paginas/auth/SignIn";
import SignUp from "./components/paginas/auth/SignUp";
import Admin from "./components/paginas/admin/Admin";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={SignIn} />
					<Route exact path="/registro" component={SignUp} />
					<Route path="/admin" component={Admin} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
