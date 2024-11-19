import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const LearnMore = () => {

    const { id } = useParams()
    const productIdInt = parseInt(id)

    // State for comments
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");


    const allData = useLoaderData()


    const services = allData.find(service => service.id === productIdInt)



    const { image, service_name, category, pricing, counselor, description, duration } = services

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment(""); // Clear the input field
        }
    };


    return (
        <div className="bg-[#011B1C] py-10 px-5 lg:px-10">

            <Helmet>
                <title>{service_name} - CareerAlly</title>
                <meta name="description" content="Learn more about CareerAlly and our mission to empower individuals." />
            </Helmet>

            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-4">Unlock Your Career Potential with Expert Guidance</h1>
            <p className="text-gray-400 lg:w-[80%] mx-auto text-center">Explore our comprehensive career counseling services designed to help you identify your strengths, overcome challenges, and achieve your professional goals. From resume building and interview preparation to personalized career planning, our experts are here to guide you every step of the way. Let us help you pave the path to a fulfilling and successful career.</p>

            <div className="mt-5 rounded-xl  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-6">
                <div>
                    <img className="rounded-2xl w-full" src={image} alt="" />
                </div>
                <h2 className="text-[#ff7029] font-semibold lg:text-2xl text-xl mt-4">{service_name}</h2>
                <h3 className="font-medium text-green-400 mt-2"><span className="text-white font-medium">Service Type:</span> {category}</h3>
                <p className="text-gray-200 mt-4">Description: {description} </p>
                <p className="text-[#ffad29] font-semibold mt-2">Duration: <span className="text-white font-semibold">{duration}</span> </p>
                <p className="text-xl font-medium text-blue-300 mt-4">Counselor Name: {counselor} </p>
                <h3 className="text-xl font-bold text-white mt-4">Price: <span className="text-orange-600">{pricing}</span> </h3>
            </div>

            {/* Feedback Section */}
            <div className="mt-10">
                <h2 className="text-2xl text-white font-bold mb-4">Leave a Comment or Feedback</h2>
                <div className="flex flex-col lg:flex-row gap-4">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write your comment here..."
                        className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                        onClick={handleCommentSubmit}
                        className="bg-[#ff7029] text-white px-5 py-3 rounded-md hover:bg-orange-600 transition"
                    >
                        Comment/Feedback
                    </button>
                </div>

                {/* Displaying Comments */}
                {comments.length > 0 && (
                    <div className="mt-6  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#ff7029] p-4">
                        <h3 className="text-xl text-white font-semibold mb-3">Submitted Comments</h3>
                        <ul className="space-y-3">
                            {comments.map((comment, index) => (
                                <li
                                    key={index}
                                    className="bg-[#011b1ce2] text-gray-200 p-3 rounded-md border border-gray-600"
                                >
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
};

export default LearnMore;