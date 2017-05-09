import React from 'react';

import './index.scss';

import logo from './images/logo.png'

export default class Banner extends React.Component {

  render() {
    return (
      
      <section className="banner">
        <div className="banner__item" >
          <div className="banner__item__image" style={{backgroundImage: `url(${'http://lorempixel.com/1920/768/1'})`}}></div>
        </div>
        <div className="banner__item" >
          <div className="banner__item__image" style={{backgroundImage: `url(${'http://lorempixel.com/1920/768/2'})`}}></div>
        </div>
        <div className="banner__item" >
          <div className="banner__item__image" style={{backgroundImage: `url(${'http://lorempixel.com/1920/768/3'})`}}></div>
        </div>
      </section>
    );
  }

}
