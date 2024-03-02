import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/Constant";
import Simmers from "./simmers";
import { useParams } from "react-router-dom";
// import { json } from "react-router-dom";
const RestaurantMenu = () => {
  const [menuinfo, setmenuinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    

    setmenuinfo(json.data);
  };

  if (menuinfo === null) {
    return <Simmers />
  }
  
  const { name, costForTwo, cuisines } = menuinfo.cards[2]?.card?.card?.info;


  const { itemCards } = menuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} - Rs. {costForTwo / 100}
      </p>

      <ul>
        {itemCards && itemCards.map((list) => (
          <li key={list.card.info.id}>
            {list.card.info.name} -Rs. {list.card.info.price / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
