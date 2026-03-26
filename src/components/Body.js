import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react" ;
import Shimmer from "./Shimmer";

const Body = () => {
    const [Restaurants, setRestaurants] = useState([]);
    const [filteredRestuarants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText]=useState("");

    useEffect(()=>{
        console.log("effect");
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(Restaurants.length ==0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={(event) => {
                        const filterRestuarants = Restaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(filteredRestuarants);
                        setFilteredRestaurants(filterRestuarants);
                    }}>Search</button>
                </div>
                <button type="button" className="filter-btn" onClick={() => {
                    setRestaurants(Restaurants.filter((data) => data.info.avgRating > 4.5 ));            
                }
                }>Filter top rated</button>
            </div>

            <div className="res-container">
            {
                filteredRestuarants.map( (Restaurant) => (
                        <RestaurantCard key={Restaurant.info.id} resData={Restaurant} ></RestaurantCard>
                    )
                )
            }
            </div>
        </div>
    );
}

export default Body;