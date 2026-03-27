// import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'
import Shimmer from './Shimmer'
import { useState } from 'react'


const RestaurantMenu = () => {
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  const {name, cuisines, costForTwo} = resInfo?.data?.cards[2].card?.card?.info;

  const menuItems = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards;
  console.log(menuItems);

  const categories = menuItems.filter((c) =>{
    return ((c.card?.["card"]?.["@type"])) ? c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" : "";
  })

  console.log("categories", categories);

  return (
    <div className='menu'>
      <h2> {name}</h2>
      <h3> {cuisines?.join(',')} </h3>
      <h3> {costForTwo} </h3>
        {
        categories.map((category, index) => (
          <RestaurantCategory 
          key={category?.card?.card.title} 
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
          />
        ))
        }
    </div>
  )
}

export default RestaurantMenu
