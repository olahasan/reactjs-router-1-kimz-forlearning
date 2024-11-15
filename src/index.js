import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import Root from "./routes/Root";
import Faq from './routes/Faq';
import Contact from './routes/Contact';
import Index from './routes/Index';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/ErrorPage';
// import UserLayout from './routes/LayoutTwo';
import UserRoot from './routes/UserRoot';
import UserEdit from './routes/UserEdit';
import UserInfo from './routes/UserInfo';

const routes = createBrowserRouter([
    {
        path: "/", 
        // element: <div>home</div>,
        element: <Root />,
        errorElement: <ErrorPage /> ,
        children:[
            {index: true, element: <Index />},
            {
                path: "faq", 
                // element: <div>faq</div>,
                element: <Faq />,
            },
            {
                path: "contact", 
                // element: <div>contact</div>,
                element: <Contact />,
            }
        ]
    },
    {
        path: ":User", 
        element: <UserRoot />,
       children: [
        {index: true, element: <div>Hello</div>},
        {
            path: "info",
            element: <UserInfo />
        },
        {
            path: "edit",
            element: <UserEdit />
        } 
       ]
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <App /> */}
