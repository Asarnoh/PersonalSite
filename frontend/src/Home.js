import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Paper, Typography } from "@material-ui/core";
import KoFi from "./KofiButton";


function Kofi() {
  return (
      <p>
        <KoFi color="#29abe0" id="O4O63QXRQ" label="Tip me" />
      </p>
      
  );
}


export default function Home() {
	return (
		<>
			<div style={{ paddingTop: "80px" }} />
			<h1 >hey</h1>
			<Kofi/>
		</>
	);
}
