import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';
import {Links} from '../data';
import Logo from '../Images/Logo.jpeg';

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
        <div className='container nav__container'>
            <Link to = "/" className='logo'>
                <img src={Logo} alt='Brand Logo' />
            </Link>
            <ul className='nav__links'>
                {
                    Links.map(({name, path}, index) => {
                        return(
                            <li>
                                <NavLink to = {path} className = {({isActive}) => isActive ? 'active-nav' : ''}>
                                {name}</NavLink>
                            </li>
                        )
                    })
                }
               {/* <li>sign in</li> */}
            </ul>
            {/* <button className='nav__register-btn'>Register</button> */}
            <button className='nav__toggle-btn'><FaBars/></button>
        </div>
   </nav>
  )
}

export default Navbar;