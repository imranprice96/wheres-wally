import wally from "./../images/wally.png";
import odlaw from "./../images/odlaw.jpg";
import wenda from "./../images/wenda.jpg";
import { useState } from "react";
import "./Startscreen.css";

function StartScreen() {
	const [isVisible, setVisibility] = useState(true);

	const start = () => {
		setVisibility(false);
	};

	return (
		<div
			className="start-overlay"
			style={{ display: isVisible ? "flex" : "none" }}
		>
			<div className="start-modal">
				<div className="modal-header">
					<div id="modal-title">Where's Wally One Piece Edition</div>
					<div id="modal-subtitle">Find the following characters</div>
				</div>
				<div className="start-images">
					<div>
						<img src={wally} alt="wally.png" className="start-img"></img>
						<p>Wally</p>
					</div>
					<div>
						{" "}
						<img src={odlaw} alt="odlaw.jpg" className="start-img" />
						<p>Odlaw</p>
					</div>
					<div>
						<img src={wenda} alt="wenda.jpg" className="start-img" />
						<p>Wenda</p>
					</div>
				</div>
				<button id="start-btn" onClick={start}>
					Start
				</button>
			</div>
		</div>
	);
}

export default StartScreen;
