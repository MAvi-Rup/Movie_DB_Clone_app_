import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">MovieDB</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/movie">Movie</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/tv">TV Shows</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/topmovies">Trending</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
