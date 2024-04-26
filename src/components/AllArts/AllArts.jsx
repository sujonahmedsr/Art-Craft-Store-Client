import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Typewriter } from 'react-simple-typewriter'

const AllArts = () => {
    const arts = useLoaderData();
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10" >
                {
                    arts.map(art => <Card key={art._id} art={art}></Card>)
                }
            </div>
        </div>
    );
};

export default AllArts;