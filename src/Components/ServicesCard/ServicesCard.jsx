import { Link } from "react-router-dom";


const ServicesCard = ({ data }) => {

    const { image, service_name, category, pricing, counselor, id } = data

    return (
        <div className="space-y-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-5 rounded-xl
">
            <div>
                <img className="rounded-2xl" src={image} alt="" />
            </div>
            <h2 className="text-[#ff7029] font-semibold text-xl">{service_name}</h2>
            <h3 className="font-medium text-green-400"><span className="text-white font-medium">Service Type:</span> {category}</h3>

            <p className="text-white">Pricing: {pricing} </p>
            <h3 className="text-white">Name of Counselor: <span className="text-yellow-400">{counselor}</span> </h3>

            <div>
                <Link to={`/services/${id}`} className="btn bg-[#ff7029] border-none text-white font-bold">Learn More</Link>
            </div>
        </div>
    );
};

export default ServicesCard;