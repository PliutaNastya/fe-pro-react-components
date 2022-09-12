import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from "./NavItem";

export const Header = ({ logoName }) => {

    const data = [
        {
            anchor: '/',
            name: 'Home',
            id: 1,
        },
        {
            anchor: '/#about',
            name: 'About',
            id: 2,
        },
        {
            anchor: '/#contact',
            name: 'Contact us',
            id: 3,
        },
        {
            anchor: '/#help',
            name: 'Help page',
            id: 4,
        }
    ]
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">{logoName}</a>
                <nav>
                    <ul className="nav-list">
                        {data.map(({anchor, name, id}) => {
                            return <NavItem key={id} anchor={anchor} name={name}/>
                        })}
                    </ul>
                </nav>
            </div>
    </header>
    )
}

Header.propTypes = {
    logoName: PropTypes.string.isRequired,
}