import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // For pagination styles
import "swiper/css/navigation"; // For navigation styles

// Optional modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation]} // Add required modules
            spaceBetween={50} // Space between slides
            slidesPerView={1} // Number of slides to show
            pagination={{ clickable: true }} // Enable pagination
            navigation // Enable navigation arrows
        >
            <SwiperSlide>
                <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;