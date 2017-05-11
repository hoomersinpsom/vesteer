import React from 'react';

import './index.scss';
import Banner from './../../components/banner';
import Types from './../../components/types';
import Mosaic from './../../components/mosaic';
import Persons from './../../components/persons';
import Quote from './../../components/quote';
import Download from './../../components/download';

export default class HomeView extends React.Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div>
        <Banner/>
        <Types/>
        <Mosaic/>
        <Persons/>
        <Quote/>
        <Download/>
      </div>
    )
  }

}
