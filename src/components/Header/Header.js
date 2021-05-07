import React from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md p-0 navbar-light">
        <Link className="navbar-brand" to="#">Meliora</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Contact us</Link>
                </li> 
                <div className="dropdown">
                    <button type="button" className="dropdown-toggle" data-toggle="dropdown">
                        More
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Link 1</Link>
                        <Link className="dropdown-item" to="#">Link 2</Link>
                        <Link className="dropdown-item" to="#">Link 3</Link>
                    </div>
                </div>   
            </ul>
        </div>
        <form className='container-fluid d-flex mr-auto search-form' >
            <input className='flex-fill' type='search' placeholder='Search'></input>
            <button type='submit'><i className="fas fa-search"></i></button>
        </form>

        </nav>
    )
}

export default Header
