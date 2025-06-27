import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css"

function Layout() {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>My App</h1>
        <NavBar />
      </header>
      <Outlet /> 
    </div>
  );
}

export default Layout;
