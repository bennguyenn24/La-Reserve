import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/ErrorPage";
import HotelDetails from "./routes/HotelDetails";
import Home from "./routes/Home";
import CheckoutCancel from "../components/Home/CheckoutCancel";
import CheckoutSuccess from "../components/Home/CheckoutSuccess";
import SearchResults from "../components/Search/SearchResults";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "hotels/:hotelId",
                element: <HotelDetails />,
            },
            {
                path: "success/:bookingId",
                element: <CheckoutSuccess />,
            },
            {
                path: "cancel/:bookingId",
                element: <CheckoutCancel />,
            },
            {
                path: "searchresults/:location",
                element: <SearchResults />,
            },
          ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
