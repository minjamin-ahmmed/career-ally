import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from "../../assets/slider1.jpeg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import img4 from "../../assets/slider4.jpg";
import img5 from "../../assets/slider5.jpg";
import { Navigation, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 200, disableOnInteraction: false }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full lg:h-screen h-[65vh]  md:h-[90vh]"
            breakpoints={{
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }}
        >
            <SwiperSlide>

                <div className='relative w-full h-full'>
                    <img src={img4} alt="Slider 1" className="w-full h-full  lg:object-cover md:object-cover filter brightness-50" />
                    <div className="absolute inset-0 bg-[#011B1C] bg-opacity-40">
                        <div className='mt-10 lg:mt-40 w-[90%] lg:w-[40%] ml-5 lg:ml-[5%] p-10 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                            <p className="text-[#FF7029] font-semibold drop-shadow-lg">
                                You are in safe hands
                            </p>
                            <h1 className='text-white font-bold text-2xl lg:text-3xl  mt-2'>Success is not just about finding a job, it’s about finding the right path. Let’s chart yours together</h1>

                            <p className='text-[#b4b3b3f8] mt-5'>The previlage coaching relationship can be an integral asset for profecient development. Shoot for the correct end goal</p>

                            <NavLink to="/services" className='btn text-white font-bold bg-[#ff7029] border-none mt-5'>Show Services</NavLink>
                        </div>
                    </div>

                </div>




            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img2} alt="Slider 1" className="w-full h-full  lg:object-cover md:object-cover filter brightness-50" />
                    <div className="absolute inset-0 bg-[#011B1C] bg-opacity-40">
                        <div className='mt-10 lg:mt-40 w-[90%] lg:w-[40%] ml-5 lg:ml-20 p-10 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                            <p className="text-[#FF7029] font-semibold drop-shadow-lg">
                                You are in safe hands
                            </p>
                            <h1 className='text-white font-bold text-2xl lg:text-4xl mt-2'>Your Dreams Are Within Reach Let’s Get Started!</h1>

                            <p className='text-[#b4b3b3f8] mt-5'>The previlage coaching relationship can be an integral asset for profecient development. Shoot for the correct end goal</p>

                            <NavLink to="/services" className='btn text-white font-bold bg-[#ff7029] border-none mt-5'>Show Services</NavLink>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="Slider 3" className="w-full h-full lg:object-cover md:object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img1} alt="Slider 1" className="w-full h-full  lg:object-cover md:object-cover filter brightness-50" />
                    <div className="absolute inset-0 bg-[#011B1C] bg-opacity-40">
                        <div className='mt-10 lg:mt-40 w-[90%] lg:w-[40%] ml-5 lg:ml-[5%] p-10 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                            <p className="text-[#FF7029] font-semibold drop-shadow-lg">
                                You are in safe hands
                            </p>
                            <h1 className='text-white font-bold text-2xl lg:text-4xl mt-2'>Struggling at some stage in normal life? I can help</h1>

                            <p className='text-[#b4b3b3f8] mt-5'>The previlage coaching relationship can be an integral asset for profecient development. Shoot for the correct end goal</p>

                            <NavLink to="/services" className='btn text-white font-bold bg-[#ff7029] border-none mt-5'>Show Services</NavLink>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img5} alt="Slider 1" className="w-full h-full  lg:object-cover md:object-cover filter brightness-50" />
                    <div className="absolute inset-0 bg-[#011B1C] bg-opacity-40">
                        <div className='mt-10 lg:mt-40 w-[90%] lg:w-[50%] ml-5 lg:ml-[25%] p-10 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                            <p className="text-[#FF7029] font-semibold drop-shadow-lg">
                                You are in safe hands
                            </p>
                            <h1 className='text-white font-bold text-xl lg:text-4xl mt-2'>Unlock your potential and take control of your career. Expert guidance makes all the difference.</h1>

                            <p className='text-[#b4b3b3f8] mt-5'>The previlage coaching relationship can be an integral asset for profecient development. Shoot for the correct end goal</p>

                            <NavLink to="/services" className='btn text-white font-bold bg-[#ff7029] border-none mt-5'>Show Services</NavLink>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
