
import { motion } from "framer-motion";

const Popularity = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const milestones = [
        { id: 1, value: "45+", label: "Online Course" },
        { id: 2, value: "1800+", label: "Happy Clients" },
        { id: 3, value: "15000+", label: "Satisfaction" },
        { id: 4, value: "21+", label: "Won Award" },
    ];

    return (
        <div className="px-5 lg:px-20">
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-4">
                Our Milestones of Success
            </h1>
            <p className="text-gray-400 lg:w-[80%] mx-auto text-center">
                We take pride in empowering individuals to achieve their career goals.
                From guiding students to their dream careers to helping professionals
                pivot toward success, our achievements reflect the transformative impact
                we've had on countless lives. Explore the stories, numbers, and
                milestones that define our journey of excellence in career counseling.
            </p>

            <div className="bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 shadow-lg mt-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={milestone.id}
                        className="bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border-2 border-[#ff7029] shadow-lg p-6"
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h3 className="font-bold text-[#ff7029] text-4xl text-center mb-2">
                            {milestone.value}
                        </h3>
                        <p className="font-bold text-2xl text-center">{milestone.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Popularity;
