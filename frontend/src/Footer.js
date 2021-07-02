import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import KoFi from "./KofiButton";

import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "./images/logo_hagalaz.png";

function Kofi() {
	return (
		<p>
			<KoFi color="#29abe0" id="O4O63QXRQ" label=" Tip me " />
		</p>
	);
}

export function Footer() {
	const siteName = "M. M. PERMUS";

	const aboutMe_EN = "About me";
	const aboutMe_SE = "Om mig";
	const aboutMe_PL = "O mnie";

	const projects_EN = "Projects";
	const projects_SE = "Projekt";
	const projects_PL = "Projekty";

	return (
		<Navbar fixed="bottom" bg="light">
			<Container
				style={{ paddingTop: 15, paddingLeft: 15, paddingRight: 15 }}
			>
				<Typography variant="h6" component="h6">
					{siteName}
				</Typography>
				<div style={{ position: "absolute", right: "10px" }}>
					<Kofi />
				</div>
			</Container>
		</Navbar>
	);
}
