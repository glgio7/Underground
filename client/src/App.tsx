import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { GlobalCSS } from "./globalcss";
import Home from "./pages";

function App() {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<Header />
			<Routes>
				<Route element={<Home />} path="/" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
