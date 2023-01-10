import {Link} from 'react-router-dom';

function Header() {
    return(
        <header className="nav">
            <h3>Code-Challenge: Blog</h3>
            <ul className="navbar">
                <li>
                    <Link className="navbar-items" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navbar-items" to="/about">About</Link>
                </li>
            </ul>
      </header>
    )
}

export default Header;