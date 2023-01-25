import styled from "styled-components";
import { useEffect, useState } from "react";
import background from "./../images/find.png";
import React from "react";
import Guess from "./Guess";

function ImageTagger(props) {
	const { coords, setCoords } = props;
	const [trueCoords, setTrueCoords] = useState([]);
	const [showGuesser, setGuess] = useState(false);

	const getCoords = (e) => {
		let rect = e.target.getBoundingClientRect();
		let x = e.clientX - rect.left; //x position within the element.
		let y = e.clientY - rect.top; //y position within the element.
		setCoords([x, y]);
		checkModalPosition(e);
		console.log(trueCoords);
	};

	const show = (e) => {
		getCoords(e);
		setGuess(!showGuesser);
	};

	const checkModalPosition = (e) => {
		let x = e.clientX;
		let y = e.clientY;
		let vWidth = window.innerWidth;
		let vHeight = window.innerHeight;

		if (x > vWidth - 230) x = vWidth - 230;
		if (y > vHeight - 250) y = vHeight - 250;
		setTrueCoords([x, y]);
	};

	//Answers
	//Wally: 563, 1088
	//Odlaw: 1044, 934
	//Wenda: 1446, 377

	return (
		<ImageContainer onClick={show}>
			<Image onClick={show} src={background}></Image>
			<Guess showGuesser={showGuesser} coords={trueCoords} />
		</ImageContainer>
	);
}

const ImageContainer = styled.div`
	object-fit: scale-down;
	background-color: #ccc;
	width: 100%;
	height: auto;
	border: 10px solid green;
	box-sizing: border-box;
	overflow: auto;
`;

const Image = styled.img`
	cursor: pointer;
	width: 1840px;
	height: 1300px;
`;

export default ImageTagger;
