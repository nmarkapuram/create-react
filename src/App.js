import React, {lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import Header from "./components/header.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import {Footer} from "./components/Footer.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";


const Grocery = lazy(() => import("./components/Grocery.js"))

const AppLayout = () => { 
    return (
        <div className="app-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading</h1>}><Grocery /></Suspense>
            },
            {
                path: "restuarants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);