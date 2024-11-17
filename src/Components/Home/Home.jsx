
import { useLoaderData } from "react-router-dom";
import ServicesSection from "../ServicesSection/ServicesSection";
import Slider from "../Slider/Slider";


const Home = () => {

    const loadedData = useLoaderData()




    return (
        <div>

            <section>
                <Slider></Slider>
            </section>

            <section className="bg-[#011b1c] py-10">
                <ServicesSection loadedData={loadedData}></ServicesSection>
            </section>

        </div>
    );
};

export default Home;