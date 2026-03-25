import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react" ;

const Body = () => {
    const [Restaurants, setRestaurants] = useState(resData);
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <button type="button" className="filter-btn" onClick={() => {
                setRestaurants(Restaurants.filter((data) => data.info.avgRating > 4.5 ));            
            }
            }>Filter top rated</button>
            <div className="res-container">
            {
                Restaurants.map( (Restaurant) => (
                        <RestaurantCard key={Restaurant.info.id} resData={Restaurant} ></RestaurantCard>
                    )
                )
            }
            </div>
        </div>
    );
}

export default Body;