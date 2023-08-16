import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='d-flex justify-content-center'>
            <nav className="navbar navbar-expand-lg bg-dark.bg-gradient ">
                <div className="container-fluid">
                    <Link className='text-white navbar-brand' to={'/'}>Rick And Morty</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link active text-warning' : 'nav-link text-white')} to='/' >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link active text-warning' : 'nav-link text-white')} to='/search' >Search</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
