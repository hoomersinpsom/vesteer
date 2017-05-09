import React from 'react';

import './index.scss';

import logo from './images/logo.png'

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row ">
            <div className="col-sm-4">
              <a href="#" className="header__logo">
                <img src={logo} alt=""/>
              </a>
            </div>
            <nav className="text-right col-sm-8">
              <a href="">Features</a>
              <a href="">works</a>
              <a href="">our team</a>
              <a href="">testimonials</a>
              <a href="">download</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }

}
