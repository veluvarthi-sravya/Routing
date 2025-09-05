import "./header.css";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav  className='nav-menu'>
                <div className='content'>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" className="logo"/>
                    </div>
                       <ul>
                        <li> <Link className="nav-link" to="/">Home</Link></li>
                        <li> <Link className="nav-link" to="/about">About</Link></li>
                     <li> <Link className="nav-link" to="/contact">Contact</Link></li>
                     
                       </ul>
                </div>

            </nav>
        </div>
    );
};

export default Header;