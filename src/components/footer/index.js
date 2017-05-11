import React from 'react';

import './index.scss';


export default class Footer extends React.Component {

  render() {
    return (

      <footer className="footer">
        <div className="_top">
          <div className="container">
            <div className="row">
              <article className="col-sm-4">
                <h1>Location</h1>
                <p>3481 Melrose place <br />
                Beverly hills, CA 902160
                </p>
              </article>
              <article className="col-sm-4">
                <h1>Share with love</h1>
                
              <div className="socials -white">
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
              </article>
              <article className="col-sm-4">
                <h1>About Activebox</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laudantium eaque, ipsa.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="_bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p>
                  Copyright &reg; 2017 ActiveBox. All rights Reserved. <br/>
                  Made with <i className="fa fa-heart" aria-hidden="true"></i> <span> By Kamal Chaneman</span>

                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
