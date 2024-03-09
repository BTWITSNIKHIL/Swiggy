import Simmers from "./simmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
// import { json } from "react-router-dom";
const RestaurantMenu = () => {
  // const [menuinfo, setmenuinfo] = useState(null);
  const { resId } = useParams();
  const menuinfo = useRestaurantMenu(resId);

  if (menuinfo === null) {
    return <Simmers />;
  }

  const { name, costForTwo, cuisines } = menuinfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
      ?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} - Rs. {costForTwo / 100}
      </p>

      <ul>
        {itemCards &&
          itemCards.map((list) => (
            <li key={list.card.info.id}>
              {list.card.info.name} -Rs. {list.card.info.price / 100}{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
