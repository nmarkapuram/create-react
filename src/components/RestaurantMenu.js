// import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    return (
        <div className="menu">
            <h2> {resInfo }</h2>
            <h3> Menu </h3>
            <ul>
                <li>

                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>
        </div>

    );

}

export default RestaurantMenu;