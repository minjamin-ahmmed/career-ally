import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Homelayout = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50">
                <Navbar></Navbar>
            </nav>

            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Homelayout;