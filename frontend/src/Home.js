import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import forest from "./images/img_forest.JPG";
import czechiaTown from "./images/img_czechia_town.JPG";
import scaniaBeach from "./images/img_scania_beach.JPG";
import scaniaKullabergPark from "./images/img_scania_kullaberg_park.JPG";
import scaniaLund from "./images/img_scania_lund.JPG";
import scaniaVolvo from "./images/img_scania_volvo.JPG";
import meTokio24 from "./images/img_me_tokio24.jpeg";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const carouselImgInterval = 5000;

const tokio24Pic = (
	<img className="d-block w-100" src={meTokio24} alt="Third slide" />
);

function CarouselHomePage() {
	return (
		<Carousel>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={forest}
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={czechiaTown}
					alt="Third slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={scaniaBeach}
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={scaniaKullabergPark}
					alt="Third slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={scaniaLund}
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={carouselImgInterval}>
				<img
					className="d-block w-100"
					src={scaniaVolvo}
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

function GridCarousel() {
	const classes = useStyles();
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Paper elevation={3} className={classes.paper}>
					<CarouselHomePage />
				</Paper>
			</Grid>
		</Grid>
	);
}

function GridAboutMe() {
	const classes = useStyles();
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Paper elevation={3} className={classes.paper}>
					{tokio24Pic}
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper elevation={3} className={classes.paper}>
					xs=6
				</Paper>
			</Grid>
		</Grid>
	);
}

function GridSocialMediaMaybeTODO() {
	const classes = useStyles();
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Paper elevation={3} className={classes.paper}>
					xs=6
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper elevation={3} className={classes.paper}>
					xs=6
				</Paper>
			</Grid>
		</Grid>
	);
}

function RecentInstagramPhoto() {
	//TODO
	// https://stackoverflow.com/questions/49386334/creating-a-slideshow-with-an-instagram-feed
	return <img />;
}

function GridSocialSomethingElseTODO() {
	const classes = useStyles();
	return (
		<div style={{ paddingBottom: 90 }}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Paper elevation={3} className={classes.paper}>
						<h3>Instagram</h3>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

function AutoGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridCarousel />
			{/* ------- */}
			<GridAboutMe />
			{/* ------- */}
			<GridSocialMediaMaybeTODO />
			{/* ------- */}
			<GridSocialSomethingElseTODO />
			{/* ------- */}
		</div>
	);
}

export default function Home() {
	return (
		<>
			<div style={{ paddingTop: "80px" }} />
			<AutoGrid />
		</>
	);
}
