import React, { Component } from 'react';
import { RoundButton } from '../components';

class MenuEditor extends Component {
  render() {
    return (
      <div>
        {RoundButton(2, '계속하기')}
      </div>
    );
  }
}

export default MenuEditor;