import React from 'react';

import './index.scss';

import avatar1 from './images/avatar1.jpg'
import avatar2 from './images/avatar2.jpg'
import avatar3 from './images/avatar3.jpg'
import avatar4 from './images/avatar4.jpg'

export default class Persons extends React.Component {

  render() {
    return (

      <section className="persons">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <img src={avatar1} className="persons__avatar" alt=""/>
              <h1>Ruth Woods
                <small>Founder. CEO</small>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <div className="socials">
                <a href="#" className="-facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" className="-twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" className="-linkedin">
                  <i className="fa  fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={avatar2} className="persons__avatar" alt=""/>
              <h1>Timothy Reed
                <small>Co-founder, developer </small>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <div className="socials">
                <a href="#" className="-facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" className="-twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" className="-linkedin">
                  <i className="fa  fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={avatar3} className="persons__avatar" alt=""/>
              <h1>Victoria Valdez
                <small>UI Designer</small>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <div className="socials">
                <a href="#" className="-facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" className="-twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" className="-linkedin">
                  <i className="fa  fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={avatar4} className="persons__avatar" alt=""/>
              <h1>Beverly Little
                <small>Data Scientist</small>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <div className="socials">
                <a href="#" className="-facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" className="-twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" className="-linkedin">
                  <i className="fa  fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
