import React, { Component } from 'react';
import { RoundButton, HeaderNav, LandingBanner } from '../components';

class MenuEditorLanding extends Component {
  render() {
    return (
      <div>
        {HeaderNav()}
        {LandingBanner()}
        <section></section>
      </div>
    );
  }
}

export default MenuEditorLanding;