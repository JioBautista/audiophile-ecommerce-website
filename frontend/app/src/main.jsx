import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Headphones from "./pages/categories/Headphones.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // This is where the data is fetched and it's filtered by the search params
        path: "/category/",
        element: <Headphones />,
      },
      {
        // Grab url params and fetch data based on product ID
        path: "/product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
