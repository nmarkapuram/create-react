import RestaurantCard, {withPromotedLabel} from './RestaurantCard'
import { useState, useEffect, useContext } from 'react'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus'
import {Link} from "react-router-dom"
import UserContext from '../utils/UserContext'


const Body = () => {
  const [Restaurants, setRestaurants] = useState([])
  const [filteredRestuarants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log('effect')
    fetchData()
  }, [])

  const {loggedInUser, setUserName} = useContext(UserContext);

  const fetchData = async () => {
    // const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const api = await fetch(
    //   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    'https://namastedev.com/api/v1/listRestaurants'
    )
    // const json = await data.json();
    const json = await api.json()
    console.log(json);
    const restaurantsObj =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setRestaurants(restaurantsObj)
    setFilteredRestaurants(restaurantsObj)
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlinestatus = useOnlineStatus()
  if (!onlinestatus) return <h1> You are offline</h1>

  if (Restaurants.length == 0) {
    return <Shimmer />
  }

  return (
    <div className='body'>
      <div className='flex'>
        <div className='search m-4 p-4'>
          <input
            className='border-1 p-2 m-2 rounded-lg'
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className='btn bg-green-100 px-2 py-2'
            onClick={(event) => {
              const filterRestuarants = Restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              console.log(filteredRestuarants)
              setFilteredRestaurants(filterRestuarants)
            }}>
            Search
          </button>
          <div>
            <label> User Name: </label>
            <input type="text" className='p-2 border' value={loggedInUser} onChange={(e)=>(setUserName(e.target.value))}></input>
          </div>
        </div>
        <div className='m-4 p-4 flex items-center'>
          <button
            type='button'
            className='px-2 py-2 bg-blue-100'
            onClick={() => {
              setRestaurants(Restaurants.filter((data) => data.info.avgRating > 4.5))
            }}>
            Filter top rated
          </button>
        </div>
      </div>

      <div className='flex flex-wrap'>
        {/* ÷If the restaurant is promoted, add a label */}
        {filteredRestuarants.map((Restaurant) => (
            <Link to={"/restuarants/" + Restaurant?.info.id} key={Restaurant.info.id}>
            {
                Restaurant?.info?.avgRating< 4 ? <RestaurantCard resData={Restaurant}></RestaurantCard> : <RestaurantCardPromoted key={Restaurant.info.id} resData={Restaurant}></RestaurantCardPromoted>
            }
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
