import {  Cdn_url } from "./Utils/Constant";

const stylecard = {
    backgroundColor: "yellow",
  };

const ResCard = ({ resdata }) => {
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
  
      cloudinaryImageId,
    } = resdata?.info;
  
    return (
      <div className="res-card" style={stylecard}>
        <img
          className="res-logo"
          src={
           Cdn_url +
            cloudinaryImageId
          }
          alt="not found"
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4> {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resdata.info.sla.deliveryTime}minutes</h4>
      </div>
    );
  };
export default ResCard;  