import "./App.css";
import Carte from "./Components/Carte";
import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Carte />
			<Footer />
		</>
	);
}

export default App;
