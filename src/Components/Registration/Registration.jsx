import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Registration = () => {

    const { createNewUser, user, setUser, updateUserProfile } = useContext(AuthContext)

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = new FormData(event.target)

        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")

        setErrorMessage('')
        setSuccess(false)


        if (password.length < 6) {
            setErrorMessage('Password Should be 6 characters or longer')
            Swal.fire({
                title: 'Error!',
                text: 'Password Should be 6 characters or longer',
                icon: 'error',
                confirmButtonText: 'Cancel',
                customClass: {
                    confirmButton: 'btn btn-danger'
                }
            })
            return
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Must contain both uppercase and lowercase letters')
            Swal.fire({
                title: 'Error!',
                text: 'Must contain both uppercase and lowercase letters',
                icon: 'error',
                confirmButtonText: 'Cancel',
                customClass: {
                    confirmButton: 'btn btn-danger'
                }
            })
            return
        }


        createNewUser(email, password)
            .then(result => {
                setUser(result.user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err);

                    })

                setSuccess(true)
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully Created Your Account',
                    icon: 'success',
                    confirmButtonText: 'Cancel',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })



            })
            .catch(error => {
                console.log("ERROR", error.message);
                setSuccess(false)

            })


    }


    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
            })

            .catch((error) => {
                console.log("ERROR", error)
            })
    }








    return (
        <div className="card w-full lg:w-[40%] mx-auto shrink-0 shadow-2xl rounded-xl  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-400 lg:p-6">

            <h1 className="text-2xl mt-5 px-5 lg:mt-0 lg:px-0 lg:text-4xl font-bold text-orange-600 text-center">Register Your Account</h1>

            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">PhotoURL</span>
                    </label>
                    <input name="photo" type="text" placeholder="Please give a photoURL" className="input input-bordered" required />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#ff7029] border-none font-bold text-white">Register</button>
                </div>

                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn bg-[#011b1c] font-bold text-[#ff7029] border border-[#ff7029]"> <FcGoogle className="text-lg" /> Login with Google</button>
                </div>

                <h2 className="text-white text-sm">Already have an account? <NavLink to="/auth/login" className="text-[#ff7029] font-semibold">Login</NavLink> </h2>
            </form>
        </div>
    );
};

export default Registration;