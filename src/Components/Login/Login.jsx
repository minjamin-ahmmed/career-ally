import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";


const Login = () => {


    const { userLogin, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()



    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value



        userLogin(email, password)
            .then(result => {
                setUser(result.user)

                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully Logged in Your Account',
                    icon: 'success',
                    confirmButtonText: 'Cancel',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })


            })

            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: "Username or Password isn't correct",
                    icon: 'error',
                    confirmButtonText: 'Cancel',
                    customClass: {
                        confirmButton: 'btn btn-danger'
                    }
                })
            })

    }

    const provider = new GoogleAuthProvider()

    const handlGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

            })

            .catch((error) => {

            })
    }



    return (
        <div className="card w-full lg:w-[40%] mx-auto shrink-0 shadow-2xl rounded-xl  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-400 lg:p-6">

            <Helmet>
                <title>Login - CareerAlly</title>
                <meta name="description" content="Learn more about CareerAlly and our mission to empower individuals." />
            </Helmet>

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

                <div className="form-control mt-6">
                    <button onClick={handlGoogleSignIn} className="btn bg-[#011b1c] font-bold text-[#ff7029] border border-[#ff7029]"> <FcGoogle className="text-lg" /> Login with Google</button>
                </div>


                <h2 className="text-white text-sm">Don&apos;t have an account? <NavLink to="/auth/register" className="text-[#ff7029] font-semibold">register</NavLink> </h2>
            </form>
        </div>
    );
};

export default Login;