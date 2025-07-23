import App from "../App";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>heii</h1>,
      },
    ],
  },
];

export default AppRoutes;
