import styled from "styled-components";
import { useEffect, useState } from "react";
import background from "./../images/find.png";
import React from "react";

function ImageTagger(props) {
	const { coords, setCoords } = props;
	const imgRef = React.createRef();
	const [trueHeight, setHeight] = useState("");
	const [trueWidth, setWidth] = useState("");

	const getCoords = (e) => {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left; //x position within the element.
		var y = e.clientY - rect.top; //y position within the element.
		setCoords([x, y]);
		console.log(coords);
	};

	useEffect(() => {
		setHeight(imgRef.current.naturalHeight);
		setWidth(imgRef.current.naturalWidth);
	}, [imgRef]);

	return (
		<ImageContainer>
			<Image
				onClick={getCoords}
				src={background}
				ref={imgRef}
				width={trueWidth}
				height={trueHeight}
				onLoad={() => {
					console.log(trueHeight);
					console.log(trueWidth);
				}}
			></Image>
		</ImageContainer>
	);
}
// on each click calculate image scale

const ImageContainer = styled.div`
	background-color: #ccc;
	width: fit-content;
	height: fit-content;
	border: 10px solid green;
	box-sizing: border-box;
`;

const Image = styled.img`
	cursor: pointer;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

//width: 100%;
//height: auto;

//width: ${(props) => props.width};
//height: ${(props) => props.height};
export default ImageTagger;
