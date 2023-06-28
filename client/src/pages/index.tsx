import { Link } from "react-router-dom";
import * as S from "./styles";

const Home = () => {
	return (
		<S.Home>
			<div className="background"></div>
			<section>
				<article>
					<img src="/img/welcome.png" alt="" className="welcome-image" />
				</article>
				<article>
					<h3>
						<strong>Descubra</strong> talentos ocultos!
					</h3>
					<h3>
						Registre-se agora e dê <strong>vida</strong> às suas músicas no{" "}
						<strong>UNDERGROUND</strong>!
					</h3>
					<Link to={"/artists"}>
						<button className="call-btn">ENCONTRAR ARTISTAS</button>
					</Link>
				</article>
			</section>
		</S.Home>
	);
};

export default Home;
