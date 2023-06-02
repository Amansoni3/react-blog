import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="col">
                    <h4 className="footer-heading">Meta Open Source</h4>
                </div>
                <div className="col">
                    <h4 className="footer-heading">Learn React</h4>
                    <ul className="footer-list">
                        <li><a href="/">Quick Start</a></li>
                        <li><a href="/">Installation</a></li>
                        <li><a href="/">Describing the UI</a></li>
                        <li><a href="/">Adding Interactivity</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4 className="footer-heading">API References</h4>
                    <ul className="footer-list">
                        <li><a href="/">React API</a></li>
                        <li><a href="/">React DOM API</a></li>
                        <li><a href="/">Managing State</a></li>
                        <li><a href="/">Escape Hatches</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4 className="footer-heading">Community</h4>
                    <ul className="footer-list">
                        <li><a href="/">Code of Conduct</a></li>
                        <li><a href="/">Meet the Team</a></li>
                        <li><a href="/">Docs Contributor</a></li>
                        <li><a href="/">Acknowledgement</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4 className="footer-heading">More</h4>
                    <ul className="footer-list">
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">React Native</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
