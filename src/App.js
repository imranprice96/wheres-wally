import "./App.css";
import StartScreen from "./components/Startscreen";
import Header from "./components/Header";
import ImageTagger from "./components/ImageTagger";

import { useState } from "react";

function App() {
	const [coords, setCoords] = useState([]);

	return (
		<div className="App">
			<Header coords={coords} setCoords={setCoords} />

			<ImageTagger coords={coords} setCoords={setCoords} />
			<StartScreen />
		</div>
	);
}

export default App;
