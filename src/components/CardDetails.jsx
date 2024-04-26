import { FaStar } from "react-icons/fa";
import {  Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";



const CardDetails = () => {
    const art = useLoaderData();
    const {  image_url, item_name, subcategory_Name,description, price, rating, stockStatus } = art;
    return (
        <div className="container mx-auto py-32 px-4">
            <div className="bg-slate-50 text-slate-900 p-5 rounded-xl shadow-2xl border hover:border-green-500 duration-300 transition max-w-3xl 
            mx-auto">
                <Link to={-1} className="text-green-600 flex items-center gap-5"><FaArrowLeftLong className="my-5 text-3xl text-green-600"></FaArrowLeftLong>Back</Link>
                <div className="relative">
                    <img className="w-full h-80 rounded-lg" src={image_url} alt="" />
                    <div className="absolute top-2 left-2">
                        <p className="font-bold bg-green-600 text-white px-4 py-2 rounded-full">{stockStatus}</p>
                    </div>
                </div>
                <div className="space-y-4 p-5">
                    <h1 className="pt-5 font-bold text-2xl">{item_name}</h1>
                    <h3 className="font-semibold text-xl text-green-600">{subcategory_Name}
                    </h3>
                    <p>{description}
                    Paper art and craft offer endless possibilities for creativity and expression, allowing artists and crafters to explore new techniques and push the boundaries of this versatile medium. Whether creating delicate origami figures, intricate paper sculptures, or vibrant paper collages, the beauty of paper art lies in its simplicity and accessibility.
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Pirze : {price}$</p>
                        <p className="flex items-center gap-2">Ratings : <FaStar className="text-yellow-400"></FaStar> {rating}</p>
                    </div>
                    {/* <Link to={`/details/${_id}`}><button className="px-8 py-3 mt-5 bg-green-600 text-white font-semibold rounded-full w-full hover:bg-green-700 duration-300 transition">View Details</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default CardDetails;