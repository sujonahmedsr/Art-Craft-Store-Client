import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Typewriter } from 'react-simple-typewriter'

const AddArts = () => {
    const { user } = useContext(AuthContext);
    const handleAddItem = e => {
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

        fetch('http://localhost:5000/arts', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(artItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your art craft added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">
                    <Typewriter
            words={['Add Your Item']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
                    </h1>
            </div>
            <form onSubmit={handleAddItem} className="space-y-6 max-w-3xl mx-auto dark:bg-slate-600 light:bg-white shadow-2xl p-10 border rounded-lg">
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Email" className="block text-lg font-semibold text-gray-400 ">User Email
                        </label>
                        <input type="email" required defaultValue={user.email} name="email" id="mail" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="Name" className="block text-lg font-semibold text-gray-400">Name</label>
                        <input type="text" required name="Name" defaultValue={user.displayName} id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="image" className="block text-lg font-semibold text-gray-400">image url</label>
                        <input type="text" required name="image_url" id="image" placeholder="image url" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="item_name" className="block text-lg font-semibold text-gray-400">item_name</label>
                        <input type="text" required name="item_name" id="item_name" placeholder="item_name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="subcategory_Name" className="block text-lg font-semibold text-gray-400">subcategory_Name</label>
                        <input type='text' required name="subcategory_Name" id="subcategory_Name" placeholder="subcategory_Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="description" className="block  text-lg font-semibold text-gray-400">description</label>
                        <input type='text' required name="description" id="description" placeholder="description" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="price" className="block text-lg font-semibold text-gray-400">price</label>
                        <input type='text' required name="price" id="price" placeholder="price" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="rating" className="block text-lg font-semibold text-gray-400">rating</label>
                        <input type='number' required name="rating" id="rating" placeholder="rating 1 to 5" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-9">
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor="customization" className="block  text-lg font-semibold text-gray-400">customization</label>
                        <input type='text' required name="customization" id="customization" placeholder="yes or no" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                    <div className="space-y-1 text-sm w-full">
                        <label htmlFor=" processing_time" className="block text-lg font-semibold text-gray-400"> processing_time</label>
                        <input type='text' required name="processing_time" id=" processing_time" placeholder=" processing_time" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100  focus:border-violet-400 border" />
                    </div>
                </div>
                <div className="space-y-1 text-sm w-1/2">
                    <label htmlFor=" stockStatus" className="block text-lg font-semibold text-gray-400"> stockStatus</label>
                    <input type='text' name="stockStatus" id=" stockStatus" placeholder="example- In stock or Made to Order"  required className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 bg-gray-100 focus:border-violet-400 border" />
                </div>

                <button className="block w-full p-3 text-center rounded-sm text-white bg-green-600">Add to website</button>
            </form>
        </div>
    );
};

export default AddArts;