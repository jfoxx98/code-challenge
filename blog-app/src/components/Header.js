import {NavLink} from 'react-router-dom';

function Header() {
    return(
        <header className="nav">
            <h3>Code-Challenge: Blog</h3>
            <ul className="navbar">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "navbar--items--active" : "navbar--items"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? "navbar--items--active" : "navbar--items"}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
      </header>
    )
}

export default Header;