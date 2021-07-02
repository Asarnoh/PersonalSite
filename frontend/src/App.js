import React, { useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import { Paper, Typography, Box } from "@material-ui/core";

import { Switch, useRouteMatch, withRouter } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import { useDispatch } from "react-redux";
import "./App.css";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
// class App extends Component {
function App() {
	// z: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
	// function App() {

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(/*tu coś*/);
	// }, [dispatch]);

	return (
		<>
			<Main />
		</>
	);
}

function Main() {
	const { path } = useRouteMatch();

	return (
		<>
			<Header />
			<Switch>
				<Route path={path} exact component={Home} />
				<Route path={path + "about"} component={About} />
				<Route path={path + "projects"} component={Projects} />
				<Route path={path + "contact"} component={Contact} />
				{/* <Route exact path="*" component={Page_404} /> */}
			</Switch>
			<Footer />
		</>
	);
}

export default withRouter(App);
