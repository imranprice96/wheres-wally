import wally from "./../images/wally.png";
import odlaw from "./../images/odlaw.jpg";
import wenda from "./../images/wenda.jpg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

function Guess(props) {
	const { showGuesser, coords } = props;
	const [answers, setAnswers] = useState([]);
	const [characters, setChars] = useState([]);

	const fetchPost = async () => {
		await getDocs(collection(db, "Answers")).then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setAnswers(newData);
			console.log(answers, newData);
		});
	};

	const initCharacters = () => {
		const _wally = { id: "wally", image: wally, isFound: false };
		const _odlaw = { id: "odlaw", image: odlaw, isFound: false };
		const _wenda = { id: "wenda", image: wenda, isFound: false };
		setChars([_wally, _odlaw, _wenda]);
	};

	const charFound = (name) => {
		let tempArr = characters;
		for (const i in tempArr) {
			if (tempArr[i].id === name) tempArr[i].isFound = true;
		}
		setChars(tempArr);
	};

	useEffect(() => {
		fetchPost();
		initCharacters();
	}, []);

	return (
		<AnswerPicker
			style={{ display: showGuesser ? "flex" : "none" }}
			x={coords[0] + "px"}
			y={coords[1] + "px"}
		>
			{characters.map((char) => {
				if (char.isFound === false) {
					return (
						<CharContainer
							key={char.id}
							onClick={() => {
								console.log(char.id);
								charFound(char.id);
							}}
						>
							<Character src={char.image} />
							<CharTitle>{char.id}</CharTitle>
						</CharContainer>
					);
				} else return <div></div>;
			})}
		</AnswerPicker>
	);
}

const AnswerPicker = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	left: ${(props) => props.x};
	top: ${(props) => props.y};
	padding: 1rem;
	border-radius: 1rem;
	gap: 1rem;
`;

const Character = styled.img`
	width: 50px;
	height: 50px;
	background-color: white;
`;

const CharContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	border-radius: 0.5rem;
	&:hover {
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
`;

const CharTitle = styled.p`
	font-size: 2rem;
	margin: 0;
	text-transform: capitalize;
`;

export default Guess;
