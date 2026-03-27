import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => { 
    // const [showItems, setShowItems] = useState(false);
    console.log("initialised");

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 text-left mx-auto my-4 shadow-lg bg-gray-50 p-2 "> 
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title}</span>
                    <span>
                    <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/></svg>
                    </span>
                </div>
                { 
                showItems && <ItemList items={data?.itemCards}></ItemList>}
            </div>

           
        </div>
    );
};

export default RestaurantCategory;