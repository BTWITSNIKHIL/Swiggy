import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./componenet/About";
import Contact from "./componenet/Contactus";
import Error from "./componenet/Error";
import Body from "./componenet/Body";
import RestaurantMenu from "./componenet/RestaurantMenu";
import Cart from "./componenet/Cart";

// import Grocery from "./componenet/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(()=>import("./componenet/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={"Loading..."}><Grocery /></Suspense>),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

reportWebVitals();
