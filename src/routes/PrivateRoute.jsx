import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    console.log(location);


    if (loading) {
        return <div className="flex items-center justify-center my-20">
            <span className="loading loading-bars loading-lg"></span>
        </div>


    }

    if (user && user?.email) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;