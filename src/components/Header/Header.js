import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <nav className='navbar navbar-expand-md p-0 navbar-light mb-5 mt-2  '>
        <Link className='navbar-brand navbar-title' to='/'>Meliora</Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end ' id='collapsibleNavbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/blog/0'>Blog</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='contact-us'>Contact us</Link>
                </li> 
                <div className='dropdown d-flex'>
                    <button type='button' className='dropdown-toggle' data-toggle='dropdown'>
                        More
                    </button>
                    <div className='dropdown-menu'>
                        <Link className='dropdown-item' to='#'>Link 1</Link>
                        <Link className='dropdown-item' to='#'>Link 2</Link>
                        <Link className='dropdown-item' to='#'>Link 3</Link>
                    </div>
                </div>   
            </ul>
        </div>
        <form className='container-fluid d-flex mr-auto search-form' >
            <input className='flex-fill search-input' type='search' placeholder='Search' onChange={(ev) => setSearchValue(ev.target.value)}></input>
            <Link to={`/search/${searchValue}`}><button type='button' className='button-search' ><i className='fas fa-search' onClick={() => {}}></i></button></Link>
        </form>
        </nav>
    )
}

export default Header
