import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import missionImg from "../../assets/our-mission.jpg";
import vissionImg from "../../assets/our-vision.jpg";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (optional)
            easing: "ease-in-out", // Easing function (optional)
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#011B1c] text-white py-10 px-5">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Hero Section */}
                <section className="text-center" data-aos="fade-up">
                    <h1 className="text-5xl font-extrabold text-[#ff7029] mb-4">Who We Are</h1>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                        At <span className="font-bold text-[#ff7029]">CareerAlly</span>, we’re more than just a service — we’re a
                        community dedicated to inspiring and empowering individuals to achieve their
                        greatest ambitions. Our commitment to excellence and passion for personal
                        development drive us to make a difference every day.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="flex flex-col lg:flex-row items-center gap-10" data-aos="fade-up">
                    <div className="lg:w-1/2">
                        <img
                            src={missionImg}
                            alt="Our Mission"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-4xl font-bold text-[#ff7029] mb-4">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our mission is to create opportunities for every individual to thrive in their
                            professional journey. Through personalized career counseling, innovative
                            learning solutions, and a supportive environment, we empower you to break
                            barriers, reach new heights, and achieve your dreams.
                        </p>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="flex flex-col lg:flex-row items-center gap-10 lg:flex-row-reverse" data-aos="fade-up">
                    <div className="lg:w-1/2">
                        <img
                            src={vissionImg}
                            alt="Our Vision"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-4xl font-bold text-[#ff7029] mb-4">Our Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We envision a world where access to quality education, professional
                            mentorship, and career guidance is universal. A future where every individual,
                            regardless of their background, is equipped to realize their fullest potential
                            and contribute to a brighter, more inclusive global society.
                        </p>
                    </div>
                </section>

                {/* Core Values Section */}
                <section data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-center text-[#ff7029] mb-8">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Integrity</h3>
                            <p>We uphold transparency and ethical principles in everything we do.</p>
                        </div>
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Innovation</h3>
                            <p>We embrace forward-thinking solutions to stay ahead in a changing world.</p>
                        </div>
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Empowerment</h3>
                            <p>We believe in fostering confidence and strength in every individual.</p>
                        </div>
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Collaboration</h3>
                            <p>We thrive through teamwork and building meaningful partnerships.</p>
                        </div>
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Excellence</h3>
                            <p>We are committed to delivering exceptional results in every endeavor.</p>
                        </div>
                        <div className="p-6 bg-[#011b1c] border border-orange-600 rounded-lg shadow-md hover:shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-[#ff7029] mb-2">Inclusivity</h3>
                            <p>We celebrate diversity and promote equality in all our practices.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-10" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-[#ff7029] mb-4">Join Us on This Journey</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Whether you’re seeking career guidance, professional training, or simply a
                        community that supports your goals, we’re here to help. Together, let’s turn
                        aspirations into achievements.
                    </p>
                    <NavLink to="/services" className="btn bg-[#ff7029] border-none hover:bg-[#e66022] text-white px-6 py-3 rounded-lg">
                        Learn More About Us
                    </NavLink>
                </section>
            </div>
        </div>
    );
};

export default About;
