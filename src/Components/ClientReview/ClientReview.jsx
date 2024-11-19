import Carousol from "../Carousol/Carousol";


const ClientReview = () => {
    return (
        <div>

            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-4">What Our Clients Say</h1>
            <p className="text-gray-400 lg:w-[80%] mx-auto text-center">Hear directly from those whose lives we've transformed! Our clients' success stories and heartfelt testimonials showcase the trust and impact we've built through our career counseling services. Discover how we've helped them unlock their true potential and achieve their career aspirations.</p>


            <div>
                <Carousol></Carousol>
            </div>


        </div>



    );
};

export default ClientReview;