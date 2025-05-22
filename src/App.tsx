import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import QuestionList from "./Components/questionList";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<QuestionList />
			<Footer />
		</>
	);
}

export default App;
