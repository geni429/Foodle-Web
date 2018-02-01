import React, { Component } from 'react';
import { HeaderNav } from '../components';

export default class Main extends Component {
  render() {
    console.log(HeaderNav);
    return (
      <div>
        {HeaderNav()}
        <div>hello</div>
      </div>
    );
  }
}