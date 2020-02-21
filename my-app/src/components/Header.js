import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return(
                <nav>
                    <ul className='nav-links'>
                        <Link to='/'><li>TODO: A LOGO</li></Link>
                        <Link to='/movies'><li>Movies</li></Link>
                        <Link to='/about'><li>About</li></Link>
                    </ul>
                </nav>
        );
    }
}
export default Header