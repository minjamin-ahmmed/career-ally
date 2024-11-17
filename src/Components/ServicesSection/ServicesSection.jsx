import ServicesCard from "../ServicesCard/ServicesCard";


const ServicesSection = ({ loadedData }) => {

    console.log(loadedData);




    return (
        <div>
            <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">Our Services </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 mt-10">
                {
                    loadedData.map(data => <ServicesCard key={data.id} data={data}></ServicesCard>)
                }
            </div>


        </div>
    );
};

export default ServicesSection;