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
window.Buffer = Buffer;

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
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
            
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);

