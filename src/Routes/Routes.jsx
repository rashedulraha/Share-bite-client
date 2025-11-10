import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Forgot from "../Pages/Forgot";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import PrivetRoutes from "../Components/PrivetRoutes/PrivetRoutes";
import Profile from "../Pages/Profile";
import MyRequests from "../Pages/MyRequests";
import MyListings from "../Pages/MyListings";
import NotFound from "../Pages/NotFound";
import FoodDetails from "../Pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "/available-foods", Component: AvailableFoods },
      {
        path: "/add-food",
        element: (
          <PrivetRoutes>
            <AddFood />
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
      {
        path: "/my-request",
        element: (
          <PrivetRoutes>
            <MyRequests />
          </PrivetRoutes>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivetRoutes>
            <MyListings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/details-page/:id",
        element: (
          <PrivetRoutes>
            <FoodDetails />
          </PrivetRoutes>
        ),
      },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "forgot-password", Component: Forgot },
    ],
  },
]);

export default router;
