import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

export default router;
