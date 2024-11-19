import { useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import { Helmet } from "react-helmet-async";


const Services = () => {

    const loadedData = useLoaderData()


    return (
        <div className="bg-[#011B1C] py-10">
            <Helmet>
                <title>Services - CareerAlly</title>
                <meta name="description" content="Learn more about CareerAlly and our mission to empower individuals." />
            </Helmet>
            <h1 className="text-2xl lg:text-4xl text-white font-bold text-center mb-4">Our Expertise at Your Service</h1>
            <p className="text-gray-400 lg:w-[80%] mx-auto text-center">Discover a range of tailored solutions designed to meet your unique needs. From cutting-edge technologies to personalized support, our services are crafted with precision and care to deliver exceptional value. Let us help you achieve your goals with efficiency and innovation.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 mt-10">
                {
                    loadedData.map(data => <ServicesCard key={data.id} data={data}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;