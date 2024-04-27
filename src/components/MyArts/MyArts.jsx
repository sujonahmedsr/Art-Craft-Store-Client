import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";

const MyArts = () => {
    const arts = useLoaderData();
    const {user} = useContext(AuthContext);
    const email = user.email;
    const results = arts.filter(art => art.email === email);

    const [items, setItems] = useState(results);

    const deleteButton = id =>{
        console.log('delete this id', id);
        fetch(`http://localhost:5000/arts/${id}`,{
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = items.filter(it => it._id !== id);
            setItems(remaining)
        })
    }
    return (
        <div className="container mx-auto py-28 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    items.map(art => <div key={art._id}>
                        <div className="bg-slate-50 text-slate-900 p-5 rounded-xl shadow-2xl border hover:border-green-500 duration-300 transition ">
                            <div className="relative">
                                <img className="w-full h-80 rounded-lg" src={art.image_url} alt="" />
                                <div className="absolute top-2 left-2">
                                    <p className="font-bold bg-green-600 text-white px-4 py-2 rounded-full">{art.stockStatus}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h1 className="pt-5 font-bold text-2xl">{art.item_name}</h1>
                                <h3 className="font-semibold text-xl text-green-600">{art.subcategory_Name}</h3>
                                <p>{art.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-bold">Pirze : {art.price}$</p>
                                    <p className="flex items-center gap-2">Ratings : <FaStar className="text-yellow-400"></FaStar> {art.rating}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-6 py-5">
                                <Link to={`/updateArts/${art._id}`} className="font-bold bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Update</Link>
                                <Link onClick={()=>deleteButton(art._id)} className="font-bold bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Delete</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyArts;