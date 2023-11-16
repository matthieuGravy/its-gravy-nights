import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Menupage from "./views/Menupage/Menupage";
import Pictures from "./views/picturespage/picturespage";
import Restaurant from "./views/Restaurantpage/Restaurantpage";
import Contact from "./views/Contact/Contactpage";
import ErrorPage from "./views/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //index true = chargement par défaut
      { index: true, element: <Homepage /> },
      { path: "/menu", element: <Menupage /> },
      { path: "/picture", element: <Pictures /> },
      { path: "/restaurant", element: <Restaurant /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
