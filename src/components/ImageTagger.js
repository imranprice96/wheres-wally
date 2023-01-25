import styled from "styled-components";
import { useEffect, useState } from "react";
import background from "./../images/find.png";
import React from "react";
import Guess from "./Guess";

function ImageTagger(props) {
	const { coords, setCoords } = props;
	const [trueCoords, setTrueCoords] = useState([]);
	const imgRef = React.createRef();
	const [trueHeight, setHeight] = useState("");
	const [trueWidth, setWidth] = useState("");
	const [target, setTarget] = useState(null);
	const [showGuesser, setGuess] = useState(false);

	const getCoords = (e) => {
		let rect = e.target.getBoundingClientRect();
		let x = e.clientX - rect.left; //x position within the element.
		let y = e.clientY - rect.top; //y position within the element.
		setCoords([x, y]);
		setTrueCoords([e.clientX, e.clientY]);
		console.log(trueCoords);
	};

	const show = (e) => {
		getCoords(e);
		setGuess(!showGuesser);
	};

	//Answers
	//Wally: 563, 1088
	//Odlaw: 1044, 934
	//Wenda: 1446, 377

	useEffect(() => {
		setHeight(imgRef.current.naturalHeight);
		setWidth(imgRef.current.naturalWidth);
	}, []);

	return (
		<ImageContainer onClick={show}>
			<Image
				onClick={show}
				src={background}
				ref={imgRef}
				width={trueWidth}
				height={trueHeight}
			></Image>
			<Guess showGuesser={showGuesser} coords={trueCoords} />
		</ImageContainer>
	);
}
// on each click calculate image scale

const ImageContainer = styled.div`
	background-color: #ccc;
	width: 1840px;
	height: 1300px;
	height: fit-content;
	border: 10px solid green;
	box-sizing: border-box;
`;

const Image = styled.img`
	object-fit: contain;
	cursor: pointer;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

//width: 100%;
//height: auto;

//width: ${(props) => props.width};
//height: ${(props) => props.height};
export default ImageTagger;
