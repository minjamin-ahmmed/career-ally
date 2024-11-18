/* eslint-disable react/jsx-key */
import client1 from "../../assets/client1.jpg"
import client2 from "../../assets/client2.jpg"
import client3 from "../../assets/client3.jpg"
import client4 from "../../assets/client4.jpg"
import client5 from "../../assets/client5.jpg"




import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="flex flex-col justify-center  p-6 bg-white rounded-lg shadow-md text-gray-700 mr-5">

        <div>
            <img className="w-20 h-20 object-cover rounded-full mb-2 " src={client1} alt="" />
        </div>
        <p className="text-justify">This service changed my life! Before seeking their help, I was stuck in a dead-end job with no idea how to transition into a career I truly loved.</p>

        <p className="text-start text-[#ff7029] font-bold my-2">John Doe</p>
        <p className="text-[#011b1c]">Electronics warfare</p>

    </div>,

    <div className="flex flex-col justify-center  p-6 bg-white rounded-lg shadow-md text-gray-700 mr-5">

        <div>
            <img className="w-20 h-20 object-cover rounded-full mb-2 " src={client2} alt="" />
        </div>
        <p className="text-justify">This service completely transformed my life! Before reaching out for help, I was feeling stuck in a job that didn’t align with my passions or goals.</p>

        <p className="text-start text-[#ff7029] font-bold my-2">John Wick</p>
        <p className="text-[#011b1c]">Actor</p>

    </div>,

    <div className="flex flex-col justify-center  p-6 bg-white rounded-lg shadow-md text-gray-700 mr-5">

        <div>
            <img className="w-20 h-20 object-cover rounded-full mb-2 " src={client3} alt="" />
        </div>
        <p className="text-justify">This service was a game changer for me! I was lost in a career I didn’t enjoy, unsure how to take the next step. With their expert advice.</p>

        <p className="text-start text-[#ff7029] font-bold my-2">Chris Hemsworth</p>
        <p className="text-[#011b1c]">Full Stack Developer</p>

    </div>,


    <div className="flex flex-col justify-center  p-6 bg-white rounded-lg shadow-md text-gray-700 mr-5">

        <div>
            <img className="w-20 h-20 object-cover rounded-full mb-2 " src={client4} alt="" />
        </div>
        <p className="text-justify">This service truly changed my perspective! I was struggling to find purpose in my job, feeling like I was stuck in a rut. </p>

        <p className="text-start text-[#ff7029] font-bold my-2">Chris Evans</p>
        <p className="text-[#011b1c]">Captain America</p>

    </div>,

    <div className="flex flex-col justify-center  p-6 bg-white rounded-lg shadow-md text-gray-700 mr-5">

        <div>
            <img className="w-20 h-20 object-cover rounded-full mb-2 " src={client5} alt="" />
        </div>
        <p className="text-justify">I can’t thank this service enough for the positive impact it had on my life! I was stuck in a job that drained me, with no clear idea of how to pivot.</p>

        <p className="text-start text-[#ff7029] font-bold my-2">Tony Starc</p>
        <p className="text-[#011b1c]">Iron Man</p>

    </div>,
];

const Carousol = () => {
    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <div className="max-w-full mx-auto py-20 px-5 lg:px-10  bg-[#011b1c] rounded-lg shadow-lg mt-10">
            <AliceCarousel
                items={items}
                responsive={responsive}
                autoPlay
                autoPlayInterval={2000}
                infinite
                disableDotsControls={false}
                disableButtonsControls={true}
            />
        </div>
    );
};

export default Carousol;
