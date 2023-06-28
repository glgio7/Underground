import { Link } from "react-router-dom";
import * as S from "./styles";
import Searchbar from "../Searchbar";

export type NavbarProps = {
	menu: boolean;
};

const Navbar = ({ menu }: NavbarProps) => {
	return (
		<S.Navbar active={menu}>
			<Searchbar active={menu}/>
			<Link to={""}>Home</Link>
			<Link to={""}>Descubra</Link>
			<Link to={""}>Sobre</Link>
			<Link to={""}>Login</Link>
		</S.Navbar>
	);
};

export default Navbar;
