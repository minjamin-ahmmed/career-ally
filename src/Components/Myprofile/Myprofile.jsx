import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Myprofile = () => {
    const { user, loading } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    if (loading) {
        return (
            <div className="flex items-center justify-center my-20">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-500 text-lg">User not logged in.</p>
            </div>
        );
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL || "https://via.placeholder.com/150",
        })
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Profile updated successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    return (
        <div className="min-h-screen bg-[#011b1c] py-10 px-5">
            <Helmet>
                <title>My Profile - CareerAlly</title>
                <meta
                    name="description"
                    content="Learn more about CareerAlly and our mission to empower individuals."
                />
            </Helmet>
            <div className="max-w-4xl mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#ff7029] overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 bg-[#011b1ce0] p-5 lg:p-8">
                        <img
                            src={photoURL || "https://via.placeholder.com/150"}
                            alt={`${name || "User"}'s Profile`}
                            className="rounded-full w-32 h-32 lg:w-40 lg:h-40 mx-auto border-4 border-orange-400"
                        />
                    </div>

                    {/* Profile Details and Edit Form */}
                    <div className="flex-grow p-6 lg:p-8">
                        <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                            My Profile
                        </h1>

                        <h2 className="text-lg font-medium text-white mb-2">
                            Name: <span className="text-[#ff7029]">{name || "N/A"}</span>
                        </h2>
                        <h2 className="text-lg font-medium text-white mb-2">
                            Email: <span className="text-[#ff7029]">{user.email || "N/A"}</span>
                        </h2>
                        <p className="text-lg font-medium text-white mb-4">
                            Photo URL:{" "}
                            <a
                                href={photoURL || "https://via.placeholder.com/150"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                {photoURL || "No Photo URL"}
                            </a>
                        </p>

                        {/* Form */}
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <h2 className="text-3xl font-bold my-5 text-white">
                                Change Profile Info
                            </h2>

                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-white font-medium mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 truncate"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div className="overflow-x-auto">
                                <label
                                    htmlFor="photoURL"
                                    className="block text-white font-medium mb-1"
                                >
                                    Photo URL
                                </label>
                                <input
                                    id="photoURL"
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 truncate overflow-x-auto"
                                    style={{
                                        wordBreak: "break-all", // Breaks long words
                                        overflowWrap: "anywhere", // Ensures URLs wrap properly
                                    }}
                                    placeholder="Enter photo URL"
                                />
                            </div>

                            {/* Save Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="btn bg-orange-500 hover:bg-orange-600 border-none text-white px-5 py-2 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;
