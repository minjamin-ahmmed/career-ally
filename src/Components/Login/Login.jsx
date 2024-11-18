import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {


    const { userLogin, setUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);

            })

            .catch(error => {
                alert(error.message)
            })

    }



    return (
        <div className="card w-full lg:w-[40%] mx-auto shrink-0 shadow-2xl rounded-xl  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-400 lg:p-6">

            <h1 className="text-2xl mt-5 px-5 lg:mt-0 lg:px-0 lg:text-4xl font-bold text-orange-600 text-center">Login Into Your Account</h1>

            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-gray-400">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#ff7029] border-none font-bold text-white">Login</button>
                </div>

                <h2 className="text-white text-sm">Don&apos;t have an account? <NavLink to="/auth/register" className="text-[#ff7029] font-semibold">register</NavLink> </h2>
            </form>
        </div>
    );
};

export default Login;