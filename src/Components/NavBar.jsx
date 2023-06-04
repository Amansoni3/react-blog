import React, { useEffect, useState } from 'react'
import "../Styles/NavBar.css"
import { Link } from 'react-router-dom'
import BasicModal from './Model'

const NavBar = () => {

    const [isDilogOpen, setDilogOpen] = useState(false)
    const [theme, setTheme] = useState("light-theme")

    const toggleTheme = () => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme")
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])


    const handleOpen = () => {
        setDilogOpen(true)
    }
    const handleClose = () => {
        setDilogOpen(false)
    }
    return (
        <>
            <div className='top'>
                Support Ukraine
                <span style={{ paddingLeft: '6px' }} >
                    <Link className='link' to="/">Help Provide Humanitarian Aid to Ukraine</Link>
                </span>
            </div>
            <div className='devide'>
            </div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <i class="fa-brands fa-react"></i>
                </Link>
                <div className="navbar-search">
                    <input onClick={handleOpen} type="text" placeholder='Search' className="navbar-search-input" />
                    {/* <button className="navbar-search-button">Search</button> */}
                </div>
                <ul className='navbar-links'>
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link'>
                            Learn
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link'>
                            Reference
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link'>
                            Community
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link'>
                            Blog
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link onClick={() => toggleTheme()} to="/" className='navbar-link'>
                            <i class="fa-sharp fa-solid fa-moon"></i>
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link'>
                            <i class="fa-brands fa-github"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            <BasicModal
                isDilogOpen={isDilogOpen}
                handleClose={handleClose}
            />
        </>

    )
}

export default NavBar