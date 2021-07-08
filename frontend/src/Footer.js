import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import KoFi from "./KofiButton";
import logo from "./images/logo.gif";

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
			<Container style={{ paddingRight: 15 }}>
				<img src={logo} width="50" height="50" alt="" />
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
