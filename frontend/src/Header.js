import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "./images/logo_hagalaz.png";

// https://www.techomoro.com/how-to-create-a-simple-multi-language-website-with-react/

const siteName = "M. M. PERMUS";

const aboutMe_EN = "About me";
const aboutMe_SE = "Om mig";
const aboutMe_PL = "O mnie";

const projects_EN = "Projects";
const projects_SE = "Projekt";
const projects_PL = "Projekty";



export function Header(props) {
	const __selector = useSelector((state) => state.authReducer);
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem(`profile`))
	);
	console.log(`user = ${user?.response}`);
	const userName = user?.response?.name;
	const userImageUrl = user?.response?.imageUrl;
	console.log(`userName = ${userName}, userImageUrl = ${userImageUrl}`);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history.push(`/`);
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem(`profile`)));
	}, [location]);

	return (
		<>
			<Navbar bg="light" variant="light" fixed="top">
				<Navbar.Brand href="/">
					<Container>
						{/* <img src={logo} width="50" height="50" alt="" /> */}
						<Typography variant="h4" component="h4">
							{siteName}
						</Typography>
					</Container>
				</Navbar.Brand>

				<Navbar.Brand href="/">
					<Container>
						<Typography variant="h6" component="h6">
							{siteName}
						</Typography>
					</Container>
				</Navbar.Brand>

				<Navbar.Brand href="/">
					<Container>
						<Typography variant="h6" component="h6">
							{siteName}
						</Typography>
					</Container>
				</Navbar.Brand>

				<Navbar.Brand href="/">
					<Container>
						<Typography variant="h6" component="h6">
							{siteName}
						</Typography>
					</Container>
				</Navbar.Brand>

				<Navbar.Brand href="/">
					<Container>
						<Typography variant="h6" component="h6">
							{siteName}
						</Typography>
					</Container>
				</Navbar.Brand>

				<select
					className="custom-select"
					value={props.language}
					onChange={(e) => props.handleSetLanguage(e.target.value)}
				>
					<option value="English">English</option>
					<option value="Swedish">Svenska</option>
					<option value="Polish">Polski</option>
				</select>

				{user ? (
					<>
						<Avatar
							alt={userName}
							src={userImageUrl}
							style={{ position: "absolute", right: "120px" }}
						>
							{userName?.charAt(0)}
						</Avatar>
						<p
							style={{
								position: "absolute",
								right: "180px",
								fontWeight: "bold",
							}}
						>
							{userName}
						</p>
						<Button
							style={{ position: "absolute", right: "10px" }}
							variant="dark"
							size="lg"
							active
							onClick={logout}
						>
							Wyloguj
						</Button>
					</>
				) : (
					<>
						<Button
							style={{ position: "absolute", right: "10px" }}
							variant="dark"
							size="lg"
							active
							onClick={() => {}}
							as={Link}
							to="/register"
						>
							Logowanie
						</Button>
					</>
				)}
			</Navbar>
		</>
	);
}
