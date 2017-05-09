import React from 'react';

import Header from './../../components/header';

export default class AppLayout extends React.Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}