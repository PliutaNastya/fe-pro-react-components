import React from 'react';
import PropTypes from 'prop-types';

export const NavItem = ({ anchor, name }) => {
    return (
        <li className="nav-list__item">
            <a href={anchor}>
                {name}
            </a>
        </li>
    )
}

NavItem.propTypes = {
    anchor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}
