import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import TowerA from "./pages/TowerA";
import TowerB from "./pages/TowerB";
import TowerC from "./pages/TowerC";
import TowerD from "./pages/TowerD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "towerA",
        element: <TowerA />,
      },
      {
        path: "towerB",
        element: <TowerB />,
      },
      {
        path: "towerC",
        element: <TowerC />,
      },
      {
        path: "towerD",
        element: <TowerD />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
