
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ art }) => {
    const { image_url, item_name, subcategory_Name, price, rating, stockStatus } = art;
    return (
        <div>
            <div className="bg-slate-50 text-slate-900 p-5 rounded-xl shadow-2xl border hover:border-green-500 duration-300 transition ">
                <div className="relative">
                    <img className="w-full h-80 rounded-lg" src={image_url} alt="" />
                    <div className="absolute top-2 left-2">
                        <p className="font-bold bg-green-600 text-white px-4 py-2 rounded-full">{stockStatus}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="pt-5 font-bold text-2xl">{item_name}</h1>
                    <h3 className="font-semibold text-xl text-green-600">{subcategory_Name}</h3>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Pirze : {price}$</p>
                        <p className="flex items-center gap-2">Ratings : <FaStar className="text-yellow-400"></FaStar> {rating}</p>
                    </div>
                    <Link><button className="px-8 py-3 mt-5 bg-green-600 text-white font-semibold rounded-full w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;