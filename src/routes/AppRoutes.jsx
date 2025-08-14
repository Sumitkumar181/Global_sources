import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import BecomeAsuppalier from "../pages/BecomeAsuppalier"
import RequestFormPage from "../pages/RequestFormPage";


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
      {
        path: "become-supplier",
        element: <BecomeAsuppalier/>
      },
      {
        path: "request-buyer",
        element: <RequestFormPage/>
      },
      
    ],
  },
];

export default AppRoutes;
