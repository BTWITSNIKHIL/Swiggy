import ResCard, { withpromotedRestuarant } from "../Rescard";
// import { resObj } from "../Utils/Mockdata";
import {  useEffect, useState } from "react";
import Simmers from "./simmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  let [reslist, setlist] = useState([]);
  let [filterlist, setfilterlist] = useState([""]);
  let [searchtext, setsearchtext] = useState("");
  const onlineStatus = useOnlineStatus();
  const PromotedRestuarant = withpromotedRestuarant(ResCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional chaining
    setlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (!reslist || reslist.length === 0) {
    return <Simmers />;
  }

  if (onlineStatus === false) {
    return (
      <h1>
        opppss!! we are unable to connect you !! please check your internet
        connection
      </h1>
    );
  }
  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="serach-resturant m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className=" border-solid border-black bg-green-300 mx-2 px-3  rounded-lg "
            onClick={() => {
              const filteresturant = reslist.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchtext.toLowerCase()) ||
                  res.info.id.includes(searchtext) ||
                  res.info.cuisines.includes(searchtext)
              );
              setfilterlist(filteresturant);
            }}
          >
            search
          </button>
        </div>
        <div>
          <button
            className="filter-btn border-solid border-black px-2 mr-2 bg-gray-400 rounded-sm"
            onClick={() => {
              reslist = reslist.filter((res) => res.info.avgRating > 4.4);

              setfilterlist(reslist);
            }}
          >
            Top rated resturant
          </button>
        </div>
      </div>
      <div className="rescontainer flex flex-wrap ">
        {filterlist.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.promoted ? (
              <PromotedRestuarant resdata={resturant} />
            ) : (
              <ResCard resdata={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
