import React from "react";
import PropTypes from "prop-types";

export const Footer = ({ logoName, text }) => {
    return(
        <footer className="footer">
            <div className="container">
                <a href="" className="logo">{logoName}</a>
                <p className="copyright">{text}</p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    logoName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}