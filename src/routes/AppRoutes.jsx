import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default AppRoutes;
