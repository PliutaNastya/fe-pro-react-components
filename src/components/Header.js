import React from 'react';
import PropTypes from 'prop-types';
import {NavItem} from "./NavItem";

export const Header = ({ logoName }) => {

    const data = [
        {
            anchor: '/',
            children: 'Home',
            id: 1,
        },
        {
            anchor: '/#about',
            children: 'About',
            id: 2,
        },
        {
            anchor: '/#contact',
            children: 'Contactus',
            id: 3,
        },
        {
            anchor: '/#help',
            children: 'Help Page',
            id: 4,
        }
    ]
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">{logoName}</a>
                <nav>
                    <ul className="nav-list">
                        {data.map(({anchor, children, id}) => {
                            return <NavItem key={id} anchor={anchor} children={children}/>
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