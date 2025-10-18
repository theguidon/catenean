import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import ArticleMain from './pages/ArticleMain.jsx';
import BuildingWriteup from "./pages/BuildingWriteup.jsx";
import App from './App.jsx'
import './index.css'

// consider making a 404 Page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ArticleMain} />
        <Route path="game" element={<>{/* <Game /> */}</>} />
        <Route path="map" element={<>{/* <Map /> */}</>} />
        <Route path="location/:bldg" element={BuildingWriteup} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
