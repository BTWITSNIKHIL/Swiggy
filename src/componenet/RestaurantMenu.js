import Simmers from "./simmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

// import { json } from "react-router-dom";
const RestaurantMenu = () => {
  // const [showitem, setshowitem] = useState(null);
  //git tutur
  const { resId } = useParams();
  const menuinfo = useRestaurantMenu(resId);

  if (menuinfo === null) {
    return <Simmers />;
  }

  const { name, costForTwo, cuisines } = menuinfo.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
  //     ?.card;

  const Categories =
    menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="Menu text-center ">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" , ")} - Rs. {costForTwo / 100} For two
      </p>
      {/* {Accomodation} */}
      {Categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card.title}
          data={category?.card?.card}
         
         
        />
      ))}
      {/* <ul>
        {itemCards &&
          itemCards.map((list) => (
            <li key={list.card.info.id}>
              {list.card.info.name} -Rs. {list.card.info.price / 100}{" "}
            </li>
          ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
