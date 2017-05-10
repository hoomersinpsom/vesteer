import React from 'react';

import './index.scss';

import logo from './images/logo.png'

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 vcenter">
              <a href="#" className="header__logo">
                <span className="h1">ACTIVEBOX</span>
              </a>
            </div>
            <nav className="text-right col-sm-8 vcenter">
              <a href="">Features</a>
              <a href="">works</a>
              <a href="">our team</a>
              <a href="">testimonials</a>
              <a href="">download</a>
            </nav>
            <div className="col-sm-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

}
