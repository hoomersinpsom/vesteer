import React from 'react';

import './index.scss';

import logo from './images/logo.png'

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(event){
    event.preventDefault()
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 vcenter">
              <a href="#"  className="header__logo">
                <span className="h1">ACTIVEBOX</span>
              </a>
              <a href="" onClick={this.toggleMenu} className={`btn-mob visible-xs ${this.state.menuOpen ? 'active' : ''}`}>
                <i className={`hamburguer ${this.state.menuOpen ? 'active' : ''}`}></i>
              </a>
            </div>
            <nav className={`text-right col-sm-8 vcenter ${this.state.menuOpen ? 'active' : ''}`}>
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
