import React from "react"
import { link } from '../../config/Header';
import jbnLogo from '../../images/icon.svg';
import { logoText } from "../../config/SideWide";
import './Header.scss';

const Header = () => (
  <div className="has-background-white Header py-2">
    <nav className="navbar container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-flex-direction-column is-align-items-flex-start">
        <a className="navbar-item p-0" href="/">
          <img src={jbnLogo} width="auto" height="100" />
        </a>
        <div className="subtitle is-6 has-text-weight-semibold">{logoText}</div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {
              link.map((link, index) => <a href={`#${link.path}`} key={index} className={`has-text-black ${index === 1 ? 'pl-6' : ''}`}>{`${link.link}`}</a>)
            }
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
