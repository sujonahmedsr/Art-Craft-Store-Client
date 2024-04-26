import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import slider1 from '../assets/slider/67e2bc3504a9ebae30c43bae185ce010.jpg'
import slider2 from '../assets/slider/7131mLRzYYL._AC_UF1000,1000_QL80_.jpg'
import slider3 from '../assets/slider/91jFFgXWgVL.jpg'
import slider4 from '../assets/slider/images.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import Card from './AllArts/Card';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const arts = useLoaderData();
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
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Glass Painting Set']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Paper Quilling Starter Kit']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="mb-5">Everything you need to start paper quilling - tools, strips, and instructions.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Handmade Greeting Cards Set']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="mb-5">A set of 6 beautifully crafted handmade greeting cards for various occasions.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Lampworking Starter Kit']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </h1>

                                <p className="mb-5">A comprehensive starter kit for lampworking, includes glass rods, torch, and safety gear.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>




            <section className='container mx-auto py-20 px-4'>
                <div className='text-center '>
                    <h1 className='text-4xl font-bold'> <Typewriter
                        words={[' Craft items section']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                    </h1>
                </div>
                <div className='grid grid-cols-3 gap-6 container mx-auto pt-10'>
                    {
                        arts.slice(0, 6).map(art => <Card key={art._id} art={art}></Card>)
                    }

                </div>

                <div className='text-center'>
                    <Link to={'/allArts'} ><button className="px-8 py-3 mt-10 bg-green-600 text-white font-semibold rounded-xl">View All Arts & Crafts</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;