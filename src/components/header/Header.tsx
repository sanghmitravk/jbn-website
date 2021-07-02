import React from "react"
import { link } from '../../config/Header';
import jbnLogo from '../../images/icon.svg';

const Header = () => (
  <div>
    <nav className="navbar container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={jbnLogo} width="auto" height="auto" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {
              link.map((link, index) => <a key={index}>{`${link.link}`}</a>)
            }
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
