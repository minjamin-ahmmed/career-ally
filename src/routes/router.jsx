import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Error from "../errorPage/Error";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";

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
                element: <Services></Services>
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