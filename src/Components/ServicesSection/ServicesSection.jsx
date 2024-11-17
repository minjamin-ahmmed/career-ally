import { NavLink } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";


const ServicesSection = ({ loadedData }) => {

    console.log(loadedData);




    return (
        <div>
            <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">Our Services </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 mt-10">
                {
                    loadedData.slice(0, 6).map(data => <ServicesCard key={data.id} data={data}></ServicesCard>)
                }
            </div>

            <div className="mt-10 flex justify-center items-center">
                <NavLink to="/services" className="btn bg-[#ff7029] border-none font-bold text-white">Show All Services</NavLink>
            </div>


        </div>
    );
};

export default ServicesSection;