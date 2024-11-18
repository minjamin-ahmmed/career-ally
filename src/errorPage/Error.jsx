import { Link } from "react-router-dom";
import errorImg from "../../src/assets/Untitled design (1).png"

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#011b1c] text-white">
            {/* Illustration */}
            <div className="text-center w-[300px] h-[300px]">
                <img
                    src={errorImg}
                    alt="404 Error"
                    className="max-w-full mx-auto w-full h-full object-cover"
                />
            </div>

            {/* Error Text */}
            <div className="text-center mt-6">
                <h1 className="text-6xl font-bold text-[#ff7029] mb-4">
                    404
                </h1>
                <h2 className="text-3xl font-semibold mb-2">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <Link to="/" className="btn bg-[#ff7029] hover:bg-orange-600 border-none text-white px-8 py-3 rounded-lg text-lg">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;