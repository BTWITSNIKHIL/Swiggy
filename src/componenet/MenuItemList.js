import React from "react";
import { Cdn_url } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { AddItem } from "../Utils/CartSlice";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch()
const handleAdd = (item)=>
{
  dispatch(AddItem(item))
}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="  border-black border-b-2 m-2 p-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold">{item.card.info.name}</span>
              <br />
              <span>
                {"Rs."}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p>{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <div className=" absolute">
              <button className="bg-white text-center p-1 mx-9 my-20 rounded-lg"
              onClick={()=>handleAdd(item)}>
                Add +
              </button>
            </div>
            <img
              src={Cdn_url + item.card.info.imageId}
              alt=""
              className="w-28 h-28"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuItemList;
