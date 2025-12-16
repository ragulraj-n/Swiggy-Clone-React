// import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import RestaurantUI from './components/RestaurantUI';
import { Buffer } from "buffer";
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
window.Buffer = Buffer;

const AppLayout = () => {
    return (
        <Provider store={appStore} >
        <div>
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
}

const route = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/order",
                element:<Body />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantUI />,
            },
              {
                path:"/shimmer",
                element:<Shimmer />,
            },{
                path:"/cart",
                element:<Cart />,
            },      
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);

