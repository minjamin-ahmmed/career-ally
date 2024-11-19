
import { useLoaderData } from "react-router-dom";
import ServicesSection from "../ServicesSection/ServicesSection";
import Slider from "../Slider/Slider";
import Popularity from "../Popularity/Popularity";
import ClientReview from "../ClientReview/ClientReview";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const loadedData = useLoaderData()




    return (
        <div>
            <Helmet>
                <title>Home - CareerAlly</title>
                <meta name="description" content="Learn more about CareerAlly and our mission to empower individuals." />
            </Helmet>

            <section>
                <Slider></Slider>
            </section>

            <section className="bg-[#011b1c] py-10">
                <ServicesSection loadedData={loadedData}></ServicesSection>
            </section>

            <section className="bg-[#011b1ce0] pt-10 pb-10 lg:pb-20 text-white">
                <Popularity></Popularity>
            </section>

            <section className="bg-[#011b1c] py-10 text-white">
                <ClientReview></ClientReview>
            </section>

        </div>
    );
};

export default Home;