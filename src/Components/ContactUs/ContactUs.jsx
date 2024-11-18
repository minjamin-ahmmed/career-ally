import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-[#011b1c] text-white py-10 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#ff7029] mb-4">
                        Get in Touch with Us
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-400">
                        We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Phone */}
                    <div className="bg-[#011b1ce0] rounded-lg p-6 shadow-md text-center">
                        <FaPhoneAlt className="text-4xl text-[#ff7029] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-400">+880 1990 560-989</p>
                        <p className="text-gray-400">+880 1560 017-163</p>
                    </div>

                    {/* Email */}
                    <div className="bg-[#011b1ce0] rounded-lg p-6 shadow-md text-center">
                        <FaEnvelope className="text-4xl text-[#ff7029] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-400">minjamin@gmail.com</p>
                        <p className="text-gray-400">sheefat007@gmail.com</p>
                    </div>

                    {/* Address */}
                    <div className="bg-[#011b1ce0] rounded-lg p-6 shadow-md text-center">
                        <FaMapMarkerAlt className="text-4xl text-[#ff7029] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Address</h3>
                        <p className="text-gray-400">351/3A, East Kazipara,</p>
                        <p className="text-gray-400">Dhaka, 1216</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-[#ff7029] mb-8">
                        Send Us a Message
                    </h2>
                    <form className="max-w-4xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-lg bg-[#011b1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                                required
                            />
                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-lg bg-[#011b1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                                required
                            />
                        </div>
                        {/* Message */}
                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="w-full p-4 rounded-lg bg-[#011b1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                            required
                        ></textarea>
                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn bg-[#ff7029] hover:bg-orange-600 border-none text-white text-lg font-semibold px-8 py-3 rounded-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;