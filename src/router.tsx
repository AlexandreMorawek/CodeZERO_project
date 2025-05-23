import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Page_404 from "./pages/Page_404";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "*",
			element: <Page_404 />
		}
		]
	},
]);

export default router;
