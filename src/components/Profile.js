import React, { Component } from 'react';
import 'assets/styles/profile.scss'
import Character from 'components/Character'

class App extends Component {
  render() {
    return (
      <div className="profile-app">
        <Character/>
      </div>
    );
  }
}

export default App;