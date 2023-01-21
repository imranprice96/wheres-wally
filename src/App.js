import "./App.css";
import wally from "./images/wally.png";
import odlaw from "./images/odlaw.jpg";
import wenda from "./images/wenda.jpg";

function App() {
	return (
		<div className="App">
			<div className="start-overlay">
				<div className="start-modal">
					<div className="modal-header">
						<div id="modal-title">Where's Wally ~ One Piece</div>
						<div id="modal-subtitle">Find these dudes</div>
					</div>
					<div className="start-images">
						<div>
							<p>Wally</p>
							<img
								src={wally}
								alt="wally.png"
								className="start-img"
							></img>
						</div>
						<div>
							<p>Odlaw</p>
							<img src={odlaw} alt="odlaw.jpg" className="start-img" />
						</div>
						<div>
							<p>Wenda</p>
							<img src={wenda} alt="wenda.jpg" className="start-img" />
						</div>
					</div>
					<button>Start</button>
				</div>
			</div>
		</div>
	);
}

export default App;
