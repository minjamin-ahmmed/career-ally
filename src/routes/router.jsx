import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Error from "../errorPage/Error";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";
import LearnMore from "../Components/LearnMore/LearnMore";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Myprofile from "../Components/Myprofile/Myprofile";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Homelayout></Homelayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },

            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('/services.json')
            },

            {
                path: "/services/:id",
                element: <PrivateRoute> <LearnMore></LearnMore> </PrivateRoute>,
                loader: () => fetch('/services.json')
            },

            {
                path: "/myprofile",
                element: <Myprofile></Myprofile>,
            },

            {
                path: "/auth",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: "/auth/login",
                        element: <Login></Login>
                    },
                    {
                        path: "/auth/register",
                        element: <Registration></Registration>
                    },
                    {
                        path: "/auth/forget-password",
                        element: <ForgetPassword></ForgetPassword>
                    }
                ]

            },

            {
                path: "/about",
                element: <About></About>
            },

            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            }

        ]

    },






])

export default router;