import { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const UpdateArts = () => {
    let location = useLocation();
    document.title =  `My Arts | ${location.pathname.slice(1)}`;

    const myArt = useLoaderData();
    const {user} = useContext(AuthContext)
    const { _id, image_url, item_name, subcategory_Name, price, rating, stockStatus, description, processing_time, customization} = myArt;
    const updateMyArt = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const Name = form.Name.value;
        const image_url = form.image_url.value;
        const subcategory_Name = form.subcategory_Name.value;
        const item_name = form.item_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const artItem = { email, Name, image_url, item_name, subcategory_Name, description, price, rating, customization, processing_time, stockStatus }
        console.log(artItem);

        fetch(`https://crud-operaion.vercel.app/arts/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(artItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'Update your item successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">
                    <Typewriter
                        words={['Update Your Item']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </h1>
            </div>
            <form onSubmit={updateMyArt} className="space-y-6 max-w-3xl mx-auto dark:bg-slate-600 light:bg-white shadow-2xl p-10 border rounded-lg">
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Email" className="block text-lg font-semibold text-gray-400 ">User Email
                        </label>
                        <input type="email" required defaultValue={user?.email} readOnly name="email" id="mail" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Name" className="block text-lg font-semibold text-gray-400">Name</label>
                        <input type="text" required name="Name" readOnly defaultValue={user?.displayName} id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="image" className="block text-lg font-semibold text-gray-400">image url</label>
                        <input type="text" defaultValue={image_url} required name="image_url" id="image" placeholder="image url" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="item_name" className="block text-lg font-semibold text-gray-400">item_name</label>
                        <input type="text" defaultValue={item_name} required name="item_name" id="item_name" placeholder="item_name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    {/* <div className="space-y-1 text-sm w-full">
                        <label htmlFor="subcategory_Name" className="block text-lg font-semibold text-gray-400"></label>
                        <input type='text' required name="subcategory_Name" id="subcategory_Name" placeholder="subcategory_Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div> */}
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="stockStatus" className="block text-lg font-semibold text-gray-400">subcategory_Name</label>
                        <select name="subcategory_Name" id="subcategory_Name" className="border border-gray-700 p-3 rounded-lg w-full">
                            <option defaultValue={subcategory_Name} value={subcategory_Name} >{subcategory_Name}</option>
                            <option value="Card Making" >Card Making</option>
                            <option value="Scrapbooking" >Scrapbooking</option>
                            <option value="Paper Quilling & origami" >Paper Quilling & origami</option>
                            <option value="Glass Painting" >Glass Painting</option>
                            <option value="Lampworking" >Lampworking</option>
                            <option value="Glass Dying & Staining" >Glass Dying & Staining</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="description" className="block  text-lg font-semibold text-gray-400">description</label>
                        <input type='text' defaultValue={description} required name="description" id="description" placeholder="description" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="price" className="block text-lg font-semibold text-gray-400">price</label>
                        <input type='text' defaultValue={price} required name="price" id="price" placeholder="price" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="rating" className="block text-lg font-semibold text-gray-400">rating</label>
                        <input type='number' defaultValue={rating} required name="rating" id="rating" placeholder="rating 1 to 5" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" maxLength={5} max={5} min={0} />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    {/* <div className="space-y-1 text-sm w-full">
                        <label htmlFor="customization" className="block  text-lg font-semibold text-gray-400">customization</label>
                        <input type='text' required name="customization" id="customization" placeholder="yes or no" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div> */}
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="customization" className="block text-lg font-semibold text-gray-400">customization</label>
                        <select name="customization" id="customization" className="border border-gray-700 p-3 rounded-lg w-full">
                            <option defaultValue={customization} value={customization} >{customization}</option>
                            <option value="Yes" >Yes</option>
                            <option value="No" >No</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor=" processing_time" className="block text-lg font-semibold text-gray-400"> processing_time</label>
                        <input type='text' defaultValue={processing_time} required name="processing_time" id=" processing_time" placeholder=" processing_time" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                {/* <div className="space-y-1 text-sm w-1/2">
                    <label htmlFor="stockStatus" className="block text-lg font-semibold text-gray-400"> stockStatus</label>
                    <input type='text' name="stockStatus" id=" stockStatus" placeholder="example- In stock or Made to Order" required className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                </div> */}
                <div className="space-y-1 text-sm w-full">
                        <label htmlFor="stockStatus" className="block text-lg font-semibold text-gray-400">stockStatus</label>
                        <select name="stockStatus" id="stockStatus" className="border border-gray-700 p-3 rounded-lg w-full">
                            <option defaultValue={stockStatus} value={stockStatus} >{stockStatus}</option>
                            <option value="In Stock" >In Stock</option>
                            <option value="Made to order" >Made to order</option>
                        </select>
                    </div>


                <button className="block w-full p-3 text-center rounded-sm text-white bg-green-600">Update Your Item</button>
            </form>
        </div>
    );
};

export default UpdateArts;