import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddArts = () => {
    const { user } = useContext(AuthContext);
    const handleAddItem = e =>{
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
        const artItem = {email, Name, image_url, item_name, subcategory_Name, description, price, rating, customization, processing_time, stockStatus}
        console.log(artItem);
    }
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Add Your Item</h1>
            </div>
            <form onSubmit={handleAddItem} className="space-y-6 max-w-3xl mx-auto">
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Email" className="block text-lg font-semibold text-gray-400 ">User Email
                            </label>
                        <input type="email" defaultValue={user.email} name="email" id="mail" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Name" className="block text-lg font-semibold text-gray-400">Name</label>
                        <input type="text" name="Name" defaultValue={user.displayName} id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="image" className="block text-lg font-semibold text-gray-400">image url</label>
                        <input type="text" name="image_url" id="image" placeholder="image url" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="item_name" className="block text-lg font-semibold text-gray-400">item_name</label>
                        <input type="text" name="item_name" id="item_name" placeholder="item_name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="subcategory_Name" className="block text-lg font-semibold text-gray-400">subcategory_Name</label>
                        <input type='text' name="subcategory_Name" id="subcategory_Name" placeholder="subcategory_Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="description" className="block  text-lg font-semibold text-gray-400">description</label>
                        <input type='text' name="description" id="description" placeholder="description" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="price" className="block text-lg font-semibold text-gray-400">price</label>
                        <input type='text' name="price" id="price" placeholder="price" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="rating" className="block text-lg font-semibold text-gray-400">rating</label>
                        <input type='number' name="rating" id="rating" placeholder="rating 1 to 5" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="customization" className="block  text-lg font-semibold text-gray-400">customization</label>
                        <input type='text' name="customization" id="customization" placeholder="yes or no" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor=" processing_time" className="block text-lg font-semibold text-gray-400"> processing_time</label>
                        <input type='text' name="processing_time" id=" processing_time" placeholder=" processing_time" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="space-y-1 text-sm w-1/2">
                    <label htmlFor=" stockStatus" className="block text-lg font-semibold text-gray-400"> stockStatus</label>
                    <input type='text' name="stockStatus" id=" stockStatus" placeholder="example- In stock or Made to Order
" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                </div>

                <button className="block w-full p-3 text-center rounded-sm text-white bg-green-600">Add to website</button>
            </form>
        </div>
    );
};

export default AddArts;