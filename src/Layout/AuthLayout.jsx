import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <div className="bg-[#011b1c] p-5 lg:p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;