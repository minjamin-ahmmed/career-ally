
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#011c1bf7] text-white py-10">
            <div className="max-w-7xl mx-auto px-5 space-y-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#ff7029]">CareerAlly</h2>
                        <p className="text-gray-400 mt-4">
                            Empowering individuals to achieve their dreams through education, mentorship, and
                            career guidance. Join us on this incredible journey!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#ff7029] mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:text-[#ff7029]">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-[#ff7029]">About Us</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-[#ff7029]">Services</NavLink></li>
                            <li><NavLink to="/contactUs" className="hover:text-[#ff7029]">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#ff7029] mb-4">Contact Us</h3>
                        <p className="text-gray-400">
                            <span className="font-semibold">Email:</span> support@careerally.com
                        </p>
                        <p className="text-gray-400">
                            <span className="font-semibold">Phone:</span> +880 1990-560-989
                        </p>
                        <p className="text-gray-400">
                            <span className="font-semibold">Address:</span> 123 Career Alley, Innovation City
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#ff7029] mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg text-black"
                            />
                            <button
                                type="submit"
                                className="bg-[#ff7029] hover:bg-[#e66022] text-white font-semibold py-2 rounded-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-600" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-gray-400">
                    <p>© {new Date().getFullYear()} CareerAlly. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-[#ff7029] text-2xl"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff7029] text-2xl"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff7029] text-2xl"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff7029] text-2xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
