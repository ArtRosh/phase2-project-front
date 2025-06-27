import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
