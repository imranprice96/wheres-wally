import wally from "./../images/wally.png";
import odlaw from "./../images/odlaw.jpg";
import wenda from "./../images/wenda.jpg";
import styled from "styled-components";

function Guess(props) {
	const { showGuesser, coords } = props;
	return (
		<AnswerPicker
			style={{ display: showGuesser ? "flex" : "none" }}
			x={coords[0] + "px"}
			y={coords[1] + "px"}
		>
			<CharContainer>
				<Character src={wally} />
				<CharTitle>Wally</CharTitle>
			</CharContainer>
			<CharContainer>
				<Character src={odlaw} />
				<CharTitle>Odlaw</CharTitle>
			</CharContainer>
			<CharContainer>
				<Character src={wenda} />
				<CharTitle>Wenda</CharTitle>
			</CharContainer>
		</AnswerPicker>
	);
}

const AnswerPicker = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	left: ${(props) => (props.x ? props.x : "50%")};
	top: ${(props) => (props.y ? props.y : "50%")};
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
`;

export default Guess;
