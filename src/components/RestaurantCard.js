import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } = resData?.info
    const {slaString} = resData?.info?.sla;

    return (
        <div className="res-card">
            <img className="res-food-logo" src={CDN_URL + cloudinaryImageId} alt={name || "Restaurant"} />
            <h3>{name}</h3>
            <p>{cuisines.join(',')}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
            <p>{slaString}</p>
        </div>
    );
};

export default RestaurantCard;