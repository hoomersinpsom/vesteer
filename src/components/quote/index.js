import React from 'react';

import './index.scss';

import quote1 from './images/quote1.jpg';
import quote2 from './images/quote2.jpg';
import quote3 from './images/quote3.jpg';

import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.scss';

export default class Quote extends React.Component {
  componentDidMount(){
    $(this.quote).slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: true,
      asNavFor: '.quote__images ._item-wrap'
    })
    $(this.images).slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true,
      asNavFor: '.quote__text ._item-wrap'
    })
  }
  render() {
    return (

      <section className="quote">
        <div className="quote__images">
          <div className="_item-wrap" ref={images => this.images = images}>
            <div className="_item" style={{backgroundImage: `url(${quote1})`}}></div>
            <div className="_item" style={{backgroundImage: `url(${quote2})`}}></div>
            <div className="_item" style={{backgroundImage: `url(${quote3})`}}></div>
          </div>
        </div>
        <div className="quote__text">
          <div className="_item-wrap" ref={quote => this.quote = quote}>
            <div className="_item"> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate animi laboriosam sint a veniam tenetur vel.
              </p>
              <span>susan sims, interaction designer at xyz</span>
            </div>
            <div className="_item"> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id adipisci, quam expedita. Repudiandae cum dolorum iusto minima fugit!
              </p>
              <span>susan sims, interaction designer at xyz</span>
            </div>
            <div className="_item"> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ipsum distinctio! Omnis id consequatur dolor ullam, quod soluta.
              </p>
              <span>susan sims, interaction designer at xyz</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
