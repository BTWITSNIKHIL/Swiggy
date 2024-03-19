import MenuItemList from "./MenuItemList";
import { useState } from "react";

const RestaurantCategories = ({ data}) => {
  const [toggle,setToggle]=useState(false);
  return (
    <div
      className="w-6/12 bg-gray-100 mx-auto  my-6 p-4 cursor-pointer"
      onClick={()=>{
        setToggle((prev)=>!prev)
      }}
    >
      <div className="flex justify-between">
        <span className="font-bold text-xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{"⬇️"}</span>
      </div>

      <div>{ toggle && <MenuItemList items={data.itemCards } />}</div>
    </div>
  );
};
export default RestaurantCategories;
