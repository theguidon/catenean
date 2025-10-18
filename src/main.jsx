import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import ArticleMain from './pages/ArticleMain.jsx';
import BuildingWriteup from "./pages/BuildingWriteup.jsx";
import buildings from "./data/locations.json";
import App from './App.jsx'
import './index.css'

let router = createBrowserRouter([
  {
    path: "/",
    Component: ArticleMain,
  },
  {
    path: "location/:bldg",
    Component: BuildingWriteup,
    loader: ({ params }) => (buildings[params.bldg]),
  },
]);
// consider making a 404 Page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
