import * as S from "./styles";
import { RiCustomerServiceLine } from "react-icons/ri";

export type SearchbarProps = {
	active: boolean;
};

const Searchbar = ({ active }: SearchbarProps) => {
	return (
		<S.Searchbar active={active}>
			<input type="text" placeholder="Pesquisar artista ou referências" />
			<button type="submit">
				<RiCustomerServiceLine />
			</button>
		</S.Searchbar>
	);
};

export default Searchbar;
