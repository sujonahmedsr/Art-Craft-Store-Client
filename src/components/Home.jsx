import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import slider1 from '../assets/slider/67e2bc3504a9ebae30c43bae185ce010.jpg'
import slider2 from '../assets/slider/7131mLRzYYL._AC_UF1000,1000_QL80_.jpg'
import slider3 from '../assets/slider/91jFFgXWgVL.jpg'
import slider4 from '../assets/slider/images.jpg'

const Home = () => {
    return (
        <div>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[95vh]">
                    <img className='h-[95vh] w-full object-cover object-center' src={slider1} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Glass Painting Set</h1>
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <button className="btn btn-primary">See All</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[95vh]" >
                    <img className='h-[95vh] w-full object-cover object-center' src={slider2} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Paper Quilling Starter Kit</h1>
                                <p className="mb-5">Everything you need to start paper quilling - tools, strips, and instructions.</p>
                                <button className="btn btn-primary">See All</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[95vh]" >
                <img className='h-[95vh] w-full object-cover object-center' src={slider3} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Handmade Greeting Cards Set</h1>
                                <p className="mb-5">A set of 6 beautifully crafted handmade greeting cards for various occasions.</p>
                                <button className="btn btn-primary">See All</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[95vh]">
                <img className='h-[95vh] w-full object-cover object-center' src={slider4} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Lampworking Starter Kit</h1>
                                <p className="mb-5">A comprehensive starter kit for lampworking, includes glass rods, torch, and safety gear.</p>
                                <button className="btn btn-primary">See All</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;