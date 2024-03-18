import "./App.css";
import "./index.css";
import Header from "./componenet/Header";
import {  Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./Utils/Appstore";

// const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
const [UserName,setUserName] = useState()
useEffect(()=>
{
  const data ={
    name:"Nikhil Kumawat"
  }
  setUserName(data.name)
},[])
  return (
    <div className="App">
    <Provider store={AppStore}>
<UserContext.Provider value={{LoggedInUser:UserName}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
  );
}


// root.render(<RouterProvider router={appRouter} />);

export default App;
