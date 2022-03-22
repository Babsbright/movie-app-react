import React from 'react-dom';
import { Link } from 'react-router-dom'

const Nav = () => {
const navStyle = {
    color:'white',
    textDecoration: 'none',

}
return(
    <nav>
        <h4><i className='fas fa-film'></i> Utopia</h4>
        <ul className='nav-links'>
        <Link style={navStyle} to='/favorite'><li><i className='fas fa-heart-circle-check'></i> </li> </Link>
        
        <li><i className='fas fa-envelope'></i> </li>
        
        <li><i className='fas fa-user'></i> </li>
        
        
        </ul>
    </nav>
)


}

export default Nav;