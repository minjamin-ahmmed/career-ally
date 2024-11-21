import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const userInfo = {
        name: user?.displayName || 'John Doe',
        role: 'Counselee',
        careerGoal: 'Full Stack Developer',
        counselingSessions: 3,
        profileCompletion: 85,
    };

    const recommendedResources = [
        { title: 'Resume Building Guide', link: '/services/2' },
        { title: 'Interview Preparation Tips', link: '/services/4' },
        { title: 'Skills Development Courses', link: '/services/7' },
        { title: 'Time Management for Professionals', link: '/services/9' },
    ];

    const upcomingSessions = [
        { date: 'Nov 25, 2024', time: '3:00 PM', counselor: 'Dr. Olivia Carter' },
        { date: 'Dec 1, 2024', time: '10:00 AM', counselor: 'Mr. Ethan White' },
    ];

    return (
        <div className="w-full mx-auto p-6 bg-[#011b1c]">
            <h1 className="text-3xl font-bold text-[#FF7029]">Welcome, <span className='text-green-600'>{userInfo.name}</span></h1>

            {/* Career Overview */}
            <div className="my-6 p-4 bg-[#011B1C] rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-white mb-2">Your Career Overview</h2>
                <p className="mt-2 text-white"><strong>Career Goal:</strong> {userInfo.careerGoal}</p>
                <p className="mt-1 text-white"><strong>Profile Completion:</strong> {userInfo.profileCompletion}%</p>
                <p className="mt-2 text-white">Complete your profile to receive better personalized advice and recommendations!</p>

                <div className="mt-4">
                    <progress
                        className="w-full h-4 rounded-lg appearance-none bg-gray-300 overflow-hidden"
                        value={userInfo.profileCompletion}
                        max="100"
                        style={{ accentColor: 'orange' }}
                    ></progress>
                </div>

                <div className="mt-4 flex space-x-4">
                    <Link
                        to="/myProfile"
                        className="bg-transparent border border-[#e86021] text-white py-2 px-4 rounded-lg hover:bg-[#e86021]"
                    >
                        Complete Your Profile
                    </Link>
                    <Link
                        to="/services"
                        className="bg-[#e86021] text-white py-2 px-4 rounded-lg hover:bg-orange-600 "
                    >
                        Book a Counseling Session
                    </Link>
                </div>
            </div>


            <div className="my-6 p-4 bg-[#011B1C] rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-[#FF7029]">Upcoming Counseling Sessions</h2>
                {upcomingSessions.length > 0 ? (
                    <ul className="mt-4 space-y-4">
                        {upcomingSessions.map((session, index) => (
                            <li key={index} className="border-b border-gray-500 pb-4">
                                <h3 className="text-xl font-medium text-white">Session with {session.counselor}</h3>
                                <p className="mt-2 text-gray-400"><strong>Date:</strong> {session.date}</p>
                                <p className="text-gray-400"><strong>Time:</strong> {session.time}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4 text-white">You have no upcoming counseling sessions at the moment.</p>
                )}
            </div>

            <div className="my-6 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white">Recommended Resources</h2>
                <ul className="mt-4 space-y-2">
                    {recommendedResources.map((resource, index) => (
                        <li key={index}>
                            <Link to={resource.link} className="text-blue-600 hover:underline">
                                {resource.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Career Assessments */}
            <div className="my-6 p-4 bg-[#011B1C] rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white">Career Assessments</h2>
                <p className="mt-4 text-gray-400">Discover your strengths and ideal career paths through our personalized career assessments.</p>
                <div className="mt-4 flex space-x-4">
                    <Link
                        to="/services"
                        className="bg-[#011B1C] text-white border-2 border-[#ff7029] py-2 px-4 rounded-lg hover:bg-[#e86021]"
                    >
                        Start Assessment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
