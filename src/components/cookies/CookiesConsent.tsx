import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Cookies } from '../../config/Cookies';
import './CookiesConsent.scss';
const CookiesConsent = () => {

    return (

        <CookieConsent
            overlay
            id="#consentModal"
            // containerClasses="container"
            location="bottom"
            buttonText="ACCEPT"
            declineButtonText="DECLINE"
            cookieName="gatsby-gdpr-google-analytics"
            expires={150}
            style={{
                background: "black",
                display: "flex",
                padding: "1rem 16rem",
                alignItems: 'center',
            }}
            buttonStyle={{
                background: "#d1cfcc",
                width: "150px",
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '25px',
                padding: '10px'
            }}
            contentStyle={{
                flex: 'auto',
                flexBasis: '100px'
            }}
            onAccept={() => {
                initializeAndTrack(location)
            }}
        >
            <p>{Cookies}</p>
        </CookieConsent>
    );
};

export default CookiesConsent;