import { MovieProvider } from "../context/MovieContext";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./App.css"
import React from "react";

function App() {

  return (
    <MovieProvider>
    <div className="layout-container">
      <header className="layout-header">
        <h1>My App</h1>
        <NavBar />
      </header>
      <Outlet /> 
    </div>
    </MovieProvider>
  );
}

export default App;
