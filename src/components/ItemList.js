import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return <div> 
            {
                items.map(item => (
                    <div key={item?.card?.info?.id} className="flex border-gray-200 border-b-2 p-1 m-2 justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold">
                                {item?.card?.info?.name}
                            </span>
                            <span>
                                {item?.card?.info?.description}
                            </span>
                            <span>
                                Rs. {item?.card?.info?.price/100}/-
                            </span>
                        </div>
                        <div className="">
                                <img src={CDN_URL + item?.card?.info?.imageId} className="w-30"/>
                        </div>
                        
                </div>

            ))
            }
    </div>
}

export default ItemList