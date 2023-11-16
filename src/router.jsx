import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Menu from "./views/Menu/Menu";
import Homepage from "./views/Homepage/Homepage";
import ErrorPage from "./views/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //index true = chargement par défaut
      { index: true, element: <Homepage /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
]);
