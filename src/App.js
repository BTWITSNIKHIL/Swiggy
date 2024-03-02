import "./App.css";
import Header from "./componenet/Header";
// import ReactDOM from "react-dom/client";
// import Error from "./componenet/Error";
// import Body from "./componenet/Body";
// import Contact from "./componenet/Contactus";
// import About from "./componenet/About";
// import RestaurantMenu from "./componenet/RestaurantMenu";
import {  Outlet } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}


// root.render(<RouterProvider router={appRouter} />);

export default App;
