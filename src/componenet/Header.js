import { useEffect, useState } from "react";
import { Header_logo } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login")

  useEffect(() => {
    
  }, [])
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={Header_logo}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li>
            <Link to="/about" >About us</Link> </li>
          <li>
            <Link to="/contact" >Contact us</Link> </li>
          <li>
            <Link to="/cart" >Cart</Link> </li>
          <button className="login-btn" onClick={() =>
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header