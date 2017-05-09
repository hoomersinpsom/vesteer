import React from 'react';

import './index.scss';
import Banner from './../../components/banner';

export default class HomeView extends React.Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div>
        <Banner/>
      </div>
    )
  }

}
