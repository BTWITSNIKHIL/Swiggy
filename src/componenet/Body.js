import ResCard from "../Rescard";
// import { resObj } from "../Utils/Mockdata";
import { useEffect, useState } from "react";
import Simmers from "./simmers";
import { Link } from "react-router-dom";
const Body = () => {
  let [reslist, setlist] = useState([]);
  let [filterlist, setfilterlist] = useState([""]);
  let [searchtext, setsearchtext] = useState("");
  console.log("render the body every time");
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
if(!reslist || reslist.length ===0)
{
return <Simmers/> ;

}
return (
    <div className="body">
      <div className="filter">
        <div className="serach-resturant">
          <input
            type="text"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            reslist = reslist.filter((res) => res.info.avgRating > 4.4);
            
            setfilterlist(reslist);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="rescontainer">
        {filterlist.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id}>
            <ResCard  resdata={resturant} />
          </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;
