import React, { Component } from 'react';
import 'assets/styles/profile.scss'
import Background from 'components/Background'
import Stage from 'components/Stage'
import ObjectLayer from 'components/ObjectLayer'
import Character from 'components/Character'

class App extends Component {
  render() {
    return (
      <div className="profile-app">
        <Background/>
        <Stage/>
        <ObjectLayer/>
        <Character/>
      </div>
    );
  }
}

export default App;