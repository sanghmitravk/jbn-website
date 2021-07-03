import React from 'react';
import jbnLogo from '../../images/icon.svg';
import { footerData } from '../../config/Footer';
import { companyName, logoText } from '../../config/SideWide';

const Footer = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    return (
        <div className="background">
            <footer className="container">
                <img src={jbnLogo} width="auto" height="auto" />
                <div className="subtitle">{logoText}</div>
                <div className="cotent">{footerData}</div>
                <div>&copy;{yyyy} {companyName} All rights reserved. </div>
            </footer>
        </div>
    );
};

export default Footer;