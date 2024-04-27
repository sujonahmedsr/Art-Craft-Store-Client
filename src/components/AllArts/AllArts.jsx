import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";

const AllArts = () => {
    const itemArts = useLoaderData();
    const [arts, setArts] = useState(itemArts)
    const buttons = ['Card Making',
    'Scrapbooking',
    'Paper Quilling & origami',
    'Glass Painting',
    'Lampworking',
    'Glass Dying & Staining']

    const handleCategories = (btn) =>{
        const result = itemArts.filter(art => art.subcategory_Name === btn)
        setArts(result)
    }
    const handleCategoriesAll = () =>{
        setArts(itemArts)
    }

    return (
        <div className="py-24 px-4 container mx-auto">
            <div className="py-5 text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">
                <Typewriter
            words={['View Our Arts And Crafts']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
                </h1>
            </div>
            <div className="flex flex-wrap gap-4 items-center py-5">
                <h1 className="font-bold text-xl">Categories: </h1>
                <button onClick={handleCategoriesAll}  className="px-3 py-1 md:px-4 md:py-2 border border-green-600 font-semibold rounded hover:rounded-full">All</button>
                {
                    buttons.map( (btn, id) => <button onClick={()=>handleCategories(btn)}  className="px-3 py-1 md:px-4 md:py-2 border border-green-600 font-semibold rounded hover:rounded-full" key={id}>{btn}</button>
                )
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10" >
                {
                    arts.map(art => <Card key={art._id} art={art}></Card>)
                }
            </div>
        </div>
    );
};

export default AllArts;