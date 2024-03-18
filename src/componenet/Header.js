import { useContext, useEffect, useState } from "react";
import { Header_logo } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const {LoggedInUser} = useContext(UserContext)
  const onlineStatus = useOnlineStatus();
  const CartItem = useSelector((store)=>store.cart.item)
  console.log(CartItem)
  useEffect(() => {}, []);
  return (
    <div className="flex justify-between shadow-lg bg-pink-400 sm:bg-green-300 h-40 ">
      <div className="logo-container">
        <img className="w-40" src={Header_logo} alt="" />
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4">
          <li className="px-4 ">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>{" "}
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery Store</Link>{" "}
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart ">Cart🛒 ({CartItem.length})</Link>{" "}
          </li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
          <h1 className="font-bold">{LoggedInUser}</h1>
        </ul>
      </div>
    </div>
  );
};
export default Header;
