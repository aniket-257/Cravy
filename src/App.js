import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // Importing Redux store
// import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
// React.lazy() is used to dynamically import a component only when it is needed.

// Chunking
// Code spliting
// Dynamic bundling
// Lazy loading
// On Demant loading
// Dynamic imports

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // Simulation of authentication Request
  useEffect(() => {
    // make API call and send USER NAME and PASSWORD
    const data = {
      name: "Aniket Tarale",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/* // Default loggedInUser Value */}
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        {/* 'Aniket Tarale' loggedInUser Value*/}
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "SHRUTIKA DONDE" }}> */}
          {/* 'SHRUTIKA DONDE' loggedInUser Value*/}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //* React Element Rendering Syntax
// root.render(<AppLayout />); //* React Component Rendering Syntax

root.render(<RouterProvider router={appRouter} />); // to provide routes
