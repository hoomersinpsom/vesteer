import React from 'react';

import './index.scss';

import ban1 from './images/ban1.jpg';
import ban2 from './images/ban2.jpg';
import ban3 from './images/ban3.jpg';
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.scss';

export default class Banner extends React.Component {
  componentDidMount(){
    $(this.slider).slick({
      arrows: false,
      infinite: true,
      speed: 800,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: 'linear',
      pauseOnHover: false
    })
  }
  render() {
    return (
      
      <section className="banner">
        <div className="banner__item" >
          <div ref={slider => this.slider = slider} className="banner__item__slider">
            <div className="banner__item__image" >
              <div style={{backgroundImage: `url(${ban1})`}}></div>
            </div>
            <div className="banner__item__image" >
              <div style={{backgroundImage: `url(${ban2})`}}></div>
            </div>
            <div className="banner__item__image" >
              <div style={{backgroundImage: `url(${ban3})`}}></div>
            </div>
          </div>
          <div className="_content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1>Your Favorite one page <br/>
                  Multi purpose template
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate placeat, quaerat illum sequi tempore recusandae quidem suscipit, quos repudiandae maiores in saepe fugit natus obcaecati a quasi tempora, cum vitae.
                  </p>
                  <a href="3" className="btn">
                    find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    );
  }

}
