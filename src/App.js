import React, {lazy, Suspense , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import ItemList from "./components/ItemList";


const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
  const [userName , setUserName] = useState();

  useEffect(()=>{
    const data = {
      name : "Mukund Tiwari",
    }
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <div className=" bg-gray-900">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/ItemList",
        element: <ItemList/>,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path:"/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error/>, 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
root.render(<RouterProvider router={appRouter} />);
