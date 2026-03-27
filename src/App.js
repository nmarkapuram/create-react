import React, { lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body.js'
import Header from './components/header.js'
import About from './components/About.js'
import Error from './components/Error.js'
import Contact from './components/Contact.js'
import { Footer } from './components/Footer.js'
import RestaurantMenu from './components/RestaurantMenu.js'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu.js'
import UserContext from './utils/UserContext.js'
import { Provider } from 'react-redux';
import Cart from './components/Cart.js'
import appStore from './utils/appStore.js'
// import Grocery from "./components/Grocery.js";

const Grocery = lazy(() => import('./components/Grocery.js'))

const AppLayout = () => {

  const[userName, setUserName] = useState("Nagaraja Markapurm");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app-layout'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: 'restuarants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
