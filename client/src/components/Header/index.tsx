import * as S from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import Navbar from "../Navbar";
import { useState } from "react";

const Header = () => {
	const [menu, setMenu] = useState(false);
	return (
		<S.Header>
			<Link to={""} className="logo-container">
				<img src={logo} alt="Logo" className="logo-icon" />
				<h1>UNDERGROUND</h1>
			</Link>
			<RiMenuFill className={"menu-btn"} onClick={() => setMenu(!menu)} />
			<Navbar menu={menu} />
		</S.Header>
	);
};

export default Header;
