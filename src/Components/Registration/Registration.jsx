import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Registration = () => {

    const { createNewUser, user, setUser } = useContext(AuthContext)

    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = new FormData(event.target)

        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")

        if (password.length < 6) {
            setErrorMessage('Password Should be 6 characters or longer')
            return
        }

        createNewUser(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);

            })
            .catch(error => {
                console.log("ERROR", error.message);

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

                <h2 className="text-white text-sm">Already have an account? <NavLink to="/auth/login" className="text-[#ff7029] font-semibold">Login</NavLink> </h2>
            </form>
        </div>
    );
};

export default Registration;