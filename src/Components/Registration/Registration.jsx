import { NavLink } from "react-router-dom";


const Registration = () => {
    return (
        <div className="card w-full lg:w-[40%] mx-auto shrink-0 shadow-2xl rounded-xl  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-400 lg:p-6">

            <h1 className="text-2xl mt-5 px-5 lg:mt-0 lg:px-0 lg:text-4xl font-bold text-orange-600 text-center">Register Your Account</h1>

            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">PhotoURL</span>
                    </label>
                    <input type="text" placeholder="Please give a photoURL" className="input input-bordered" required />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#ff7029] border-none font-bold text-white">Login</button>
                </div>

                <h2 className="text-white text-sm">Already have an account? <NavLink to="/auth/login" className="text-[#ff7029] font-semibold">Login</NavLink> </h2>
            </form>
        </div>
    );
};

export default Registration;