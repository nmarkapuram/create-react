import { CDN_URL } from '../utils/constants'
const RestaurantCard = (props) => {
  const { resData } = props
  const info = resData?.info ?? resData ?? {}
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } = info
  const slaString = info?.sla?.slaString

  return (
    <div data-testid="resCard" className='m-4 p-4 w-52 border rounded-lg hover:bg-gray-400'>
      <img
        className='w-full h-50 rounded-2xl'
        src={CDN_URL + cloudinaryImageId}
        alt={name || 'Restaurant'}
      />
      <h2 className='py-5'>{name}</h2>
      <p className='wrap-break-word'>{(cuisines ?? []).join(',')}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{slaString}</p>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
