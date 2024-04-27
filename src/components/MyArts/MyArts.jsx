import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const MyArts = () => {
    const arts = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user.email;
    const results = arts.filter(art => art.email === email);

    const [items, setItems] = useState(results);

    const deleteButton = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crud-operaion.vercel.app/arts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                        const remaining = items.filter(it => it._id !== id);
                        setItems(remaining)
                    })
            }
        });

    }


 


    const hanldeYes = (yes)=>{
        const result = results.filter(it => it.customization === yes)
        setItems(result)
    }
    const handleNo = (no)=>{
        const result = results.filter(it => it.customization === no)
        setItems(result)
    }

    return (
        <div className="container mx-auto py-28 px-4">
            <div>
                {
                    items.length > 0 ? <h1 className="font-bold text-3xl py-5 text-center">Your added arts and craft is : {items.length}</h1>
                    : 
                    <div className="text-center">
                        <h1 className="font-bold text-3xl py-5">
                            
                            <Typewriter
                                        words={['You dont have post an arts and craft']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                            </h1>
                        <Link to={'/AddArts'} className="text-green-600 flex items-center gap-5"><FaArrowLeftLong className="my-5 text-3xl text-green-600"></FaArrowLeftLong>Add Your Item</Link>
                    </div>
                }
                {
                    items.length > 1 && <div className="pb-10 text-center">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-green-600 text-white">Filter By Customization</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>hanldeYes('Yes')} ><a>Yes</a></li>
                            <li onClick={()=>handleNo('No')} ><a>No</a></li>
                        </ul>
                    </details>
                </div>
                    
                    
                    // <div className="flex items-center gap-6">
                    //     <label htmlFor="Name" className="block text-lg font-bol">Customization</label>
                    //     <select name="Customization" className="border border-gray-700 p-3 rounded-lg">
                    //         <option value="select">Select</option>
                    //         <option value="Yes">Yes</option>
                    //         <option value="No">No</option>
                    //     </select>
                    // </div>
                }
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
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
                                <div className="flex space-y-3 flex-col justify-between">
                                    <p className="font-bold">Customaization : {art.customization}</p>
                                    <p className="flex items-center gap-2">Proccesing Time : {art.processing_time}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-6 py-5">
                                <Link to={`/updateArts/${art._id}`} className="font-bold bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Update</Link>
                                <Link onClick={() => deleteButton(art._id)} className="font-bold bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Delete</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyArts;