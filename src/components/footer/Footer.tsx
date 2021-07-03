import React from 'react';
import jbnLogo from '../../images/icon.svg';
import { footerData } from '../../config/Footer';
import { companyName, logoText } from '../../config/SideWide';
import '../../style/base.scss'
import './Footer.scss';

const Footer = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    return (
        <div className="Footer">
            <footer className="container">
                <img src={jbnLogo} width="auto" height="auto" />
                <div className="subtitle is-6" >{logoText}</div>
                {footerData.map((li, index) => <div className="content is-medium mb-1" key={index}>
                    {li.li}
                </div>
                )}
                <div className="py-6 content is-small" >&copy;{yyyy} {companyName} All rights reserved. </div>
            </footer>
        </div>
    );
};

export default Footer;