import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <NavBar />
      </header>
      <Outlet /> 
    </div>
  );
}

export default Layout;
