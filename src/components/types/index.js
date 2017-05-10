import React from 'react';

import './index.scss';

import ico1 from './images/ico1.png';
import ico2 from './images/ico2.png';
import ico3 from './images/ico3.png';
import ico4 from './images/ico4.png';
import ico5 from './images/ico5.png';
import ico6 from './images/ico6.png';

export default class Types extends React.Component {

  render() {
    return (
      
      <section className="types">
        <div className="container">
          <div className="rows">
            <article className="col-sm-4 types__item">
              <img src={ico1} alt=""/>
              <h1>easily customised</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
            <article className="col-sm-4 types__item">
              <img src={ico2} alt=""/>
              <h1>responsive ready</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
            <article className="col-sm-4 types__item">
              <img src={ico3} alt=""/>
              <h1>modern design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
          </div>          
          <div className="rows">
            <article className="col-sm-4 types__item">
              <img src={ico4} alt=""/>
              <h1>clean code</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
            <article className="col-sm-4 types__item">
              <img src={ico5} alt=""/>
              <h1>reado to ship</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
            <article className="col-sm-4 types__item">
              <img src={ico6} alt=""/>
              <h1>download for free</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum similique, commodi fugit aut natus quas quasi quos explicabo eum deserunt 
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  }

}
