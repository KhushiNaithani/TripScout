import React from 'react';
import {Link} from 'react-router-dom';


const Nav=()=>{
    return (
        <>
        <nav>
            <h1 className="title-name">TripScout</h1>
        <main>
            
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/map-data'}><button className='button'>Get Started</button></Link></li>
        </main>
        </nav>

        </>

    )
}

export default Nav;