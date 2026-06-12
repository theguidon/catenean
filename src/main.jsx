import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ArticleMain from "./pages/ArticleMain.jsx";
import BuildingWriteup from "./pages/BuildingWriteup.jsx";
import GameIntro from "./pages/GameIntro.jsx";
import { GamePage1, GamePage2 } from "./pages/GameIntroPages.jsx";
import GameLayout from "./pages/GameLayout.jsx";
import buildings from "./data/locations.json";
import Map from "./pages/Map.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

function RootLayout() {
  return (
    <>
      <Outlet />
      <Analytics />
    </>
  );
}

let router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: ArticleMain,
      },
      {
        path: "/map",
        Component: Map,
      },
      {
        path: "location/:bldg",
        Component: BuildingWriteup,
        loader: ({ params }) => buildings[params.bldg],
      },
      {
        path: "game",
        Component: GameLayout,
        children: [
          {
            path: "intro",
            children: [
              {
                index: true,
                Component: GameIntro,
              },
              {
                path: "1",
                Component: GamePage1,
              },
              {
                path: "2",
                Component: GamePage2,
              },
            ],
          },
        ],
      },
    ],
  },
]);
// consider making a 404 Page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
