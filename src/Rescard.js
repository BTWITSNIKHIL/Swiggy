import { Cdn_url } from "./Utils/Constant";

const ResCard = ({ resdata }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,

    cloudinaryImageId,
  } = resdata?.info;

  return (
    <div className="res-card w-60  p-4 m-4 bg-gray-200 hover:bg-gray-400 ">
      <img
        className="res-logo rounded-lg shadow-md shadow-black  "
        src={Cdn_url + cloudinaryImageId}
        alt="not found"
      />

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4> {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resdata.info.sla.deliveryTime}minutes</h4>
    </div>
  );
};

export const withpromotedRestuarant = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
