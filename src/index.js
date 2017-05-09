import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './config/routes';
import './config/stylesheets/application.scss';

require.context('./../public/');

if (module.hot) {
  module.hot.accept();
}

class App extends React.PureComponent {

  render() {
    return Routes;
  }

}

ReactDOM.render(<App />, document.querySelector('#yield'));
