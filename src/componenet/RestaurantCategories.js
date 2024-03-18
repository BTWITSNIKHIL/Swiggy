import MenuItemList from "./MenuItemList";

const RestaurantCategories = ({ data, showitem, setshowitem}) => {
  const handleClick = () => {
  setshowitem()
   
  };
  return (
    <div
      className="w-6/12 bg-gray-100 mx-auto  my-6 p-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="font-bold text-xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{"⬇️"}</span>
      </div>

      <div>{showitem && <MenuItemList items={data.itemCards } />}</div>
    </div>
  );
};
export default RestaurantCategories;
