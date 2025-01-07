import React from "react";
import {
    FaInstagram,
    FaGithub ,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li> 
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                The VideoX, a video streaming service that supported high-definition content delivery, scaling to accommodate over 50,000 concurrent users and reducing buffering time by 35% through advanced caching techniques.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.instagram.com/codesrahul/#"><FaInstagram /></a>
                        
                    </span>
                    <span className="icon">
                        <a href="https://github.com/CodesRahul"><FaGithub /></a>
                        
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/codesrahul"><FaLinkedin /></a>
                        
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer; 