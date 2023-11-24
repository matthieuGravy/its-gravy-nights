import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Offerings from "./views/Offeringspage/Offeringspage";
import Pictures from "./views/picturespage/picturespage";
import Aboutus from "./views/Aboutus/Aboutus";
import Contact from "./views/Contact/Contactpage";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import Send from "./views/Sendpage/Sendpage";
import Admin from "./views/Adminpage/Adminpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //index true = chargement par défaut
      { index: true, element: <Homepage /> },
      { path: "/offerings", element: <Offerings /> },
      { path: "/picture", element: <Pictures /> },
      { path: "/the-club", element: <Aboutus /> },
      { path: "/contact", element: <Contact /> },
      { path: "/send-form", element: <Send /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);
