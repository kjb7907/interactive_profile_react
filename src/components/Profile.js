import React, { Component } from 'react';
import 'assets/styles/profile.scss'
import Character from 'components/Character'
import Stage from 'components/Stage'
import ObjectLayer from 'components/ObjectLayer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      action: 'd' // d: 정지 r: 오른쪽으로 가기 l: 왼쪽으로 가기
    }
  }

  handleDefault = ()=> {
    this.setState({
      action: 'd'
    })
  }  

  handleRight = ()=> {
    this.setState({
      action: 'r'
    })
  }

  handleLeft = ()=> {
    this.setState({
      action: 'l'
    })
  }  

  render() {
    return (
      <div className="profile-app">
        <div className="app-handler">
          <div className="left" 
            onMouseDown={this.handleLeft} 
            onMouseUp={this.handleDefault}
            onTouchStart={this.handleLeft}
            onTouchEnd={this.handleDefault}>
          </div>
          <div className="right" 
            onMouseDown={this.handleRight} 
            onMouseUp={this.handleDefault}
            onTouchStart={this.handleRight}
            onTouchEnd={this.handleDefault}>              
          </div>
        </div>
        <Character action={this.state.action}/>
        <Stage action={this.state.action}/>
        <ObjectLayer action={this.state.action}/>
      </div>
    );
  }
}

export default App;