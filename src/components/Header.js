import "./Header.css";

function Header(props) {
	const { coords, setCoords } = props;
	return (
		<div className="header">
			<p>x:{coords[0]}</p>
			<p>y:{coords[1]}</p>
		</div>
	);
}
export default Header;
