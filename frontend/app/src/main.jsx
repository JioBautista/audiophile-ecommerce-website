import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Headphones from "./pages/categories/Headphones.jsx";
import Speakers from "./pages/categories/Speakers.jsx";
import Earphones from "./pages/categories/Earphones.jsx";
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
        path: "/category/headphones",
        element: <Headphones />,
      },
      {
        path: "/category/speakers",
        element: <Speakers />,
      },
      {
        path: "/category/earphones",
        element: <Earphones />,
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
