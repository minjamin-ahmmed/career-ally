import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth"; // Import the updateProfile method
import Swal from "sweetalert2"; // Optional: For success/error messages

const MyProfile = () => {
    const { user } = useContext(AuthContext);


    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");


    const handleUpdateProfile = (e) => {
        e.preventDefault();

        // Update user profile in Firebase
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
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
            <div className="max-w-4xl mx-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#ff7029] overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 bg-[#011b1ce0] p-5 lg:p-8">
                        <img
                            src={user.photoURL || "https://via.placeholder.com/150"}
                            alt={`${name}'s Profile`}
                            className="rounded-full w-32 h-32 lg:w-40 lg:h-40 mx-auto border-4 border-orange-400"
                        />
                    </div>

                    {/* Profile Details and Edit Form */}
                    <div className="flex-grow p-6 lg:p-8">
                        <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                            My Profile
                        </h1>


                        <h2 className="text-xl font-medium text-white">Name: <span className="text-[#ff7029]">{user.displayName}</span> </h2>
                        <h2 className="text-xl font-medium text-white">Email: <span className="text-[#ff7029]">{user.email}</span> </h2>
                        <p className="text-lg font-medium text-white">PhotoURL: <span className="text-blue-400 text-sm">{user.photoURL}</span> </p>



                        {/* Form */}
                        <form onSubmit={handleUpdateProfile} className="space-y-4">

                            <h1 className="text-4xl font-bold my-5 text-white">Change Profile Info</h1>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div>
                                <label htmlFor="photoURL" className="block text-white font-medium mb-1">
                                    Photo URL
                                </label>
                                <input
                                    id="photoURL"
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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

export default MyProfile;
