import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Forgot from "../Pages/Forgot";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import PrivetRoutes from "../Components/PrivetRoutes/PrivetRoutes";
import MyRequests from "../Pages/MyRequests";
import MyListings from "../Pages/MyListings";
import NotFound from "../Pages/NotFound";
import FoodDetails from "../Pages/FoodDetails";
import About from "../Pages/About";
import DonorProfile from "../Pages/DonorProfile";
import UserProfile from "../Pages/UserProfile";
import AuthLayout from "../Components/Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
        path: "/user-profile",
        element: (
          <PrivetRoutes>
            <UserProfile />
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
      { path: "about", Component: About },
      { path: "donor-profile/:id", Component: DonorProfile },
    ],
  },
  {
    path: "auth/",
    Component: AuthLayout,
    errorElement: <NotFound />,
    children: [
      { path: "/auth/register", Component: Register },
      { path: "/auth/forgot-password", Component: Forgot },
      { path: "/auth/login", Component: Login },
    ],
  },
]);

export default router;
