import React from 'react';
import PropTypes from "prop-types";

export const Article = ({ subTitle, text }) => {
    return (
        <li className="list__item">
            <h2>{subTitle}</h2>
            <p>{text}</p>
        </li>
    )
}

Article.propTypes = {
    subTitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
