import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";


const ForgetPassword = () => {

    const [searchParams] = useSearchParams()
    const emailParam = searchParams.get("email") || "";
    console.log(searchParams, emailParam);

    const handleReset = () => {
        window.location.href = "https://mail.google.com/";
    }


    return (
        <div className="card w-full lg:w-[40%] mx-auto shadow-2xl rounded-xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-400 lg:p-6">
            <Helmet>
                <title>My Profile - Career Ally</title>
                <meta
                    name="description"
                    content="Learn more about CareerAlly and our mission to empower individuals."
                />
            </Helmet>
            <h1 className="text-2xl mt-5 px-5 lg:mt-0 lg:px-0 lg:text-4xl font-bold text-orange-600 text-center">Reset Your Password</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        defaultValue={emailParam}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button
                        type="button"
                        className="btn bg-[#ff7029] border-none font-bold text-white"
                        onClick={handleReset}
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;