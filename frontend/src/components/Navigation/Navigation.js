import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <header className="navbar">
            <div className="nav-brand">
                <h3> Logo Here </h3>
            </div>
            <ul className="nav-links">
                <li>
                    Link 1
                </li>
                <li>
                    Link 2
                </li>
                <li>
                    Link 3
                </li>
            </ul>
        </header>
    )
}

export default Navigation;