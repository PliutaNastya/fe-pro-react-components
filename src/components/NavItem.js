import React from 'react';
import PropTypes from 'prop-types';

export const NavItem = ({ anchor, children }) => {
    return (
        <li className="nav-list__item">
            <a href={anchor}>
                {children}
            </a>
        </li>
    )
}

NavItem.propTypes = {
    anchor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}
