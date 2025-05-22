import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
	{
		element: <App />,
		path: "/",
		children: [
			{
				element: <HomePage />,
				path: "/",
			},
		],
	},
]);

export default router;
