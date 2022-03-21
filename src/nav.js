import React from 'react-dom';
import { Link } from 'react-router-dom'

const Nav = () => {
const navStyle = {
    color:'white',
    textDecoration: 'none',
    marginTop:'40px',

}
return(
    <nav>
        <h4>Hi, Welcome!</h4>
        <ul className='nav-links'>
        <Link style={navStyle} to='/movieList'><li>Favorites <i className='fas fa-heart'></i> </li> </Link>
        </ul>
    </nav>
)


}

export default Nav;