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

  createKeyEvent = ()=> {
    // 키보드로 핸들링 가능하게하는 이벤트 생성
    let self = this
    window.addEventListener("keydown", function (e) {
      if(e.keyCode === 37){
        self.handleLeft()
      }else if(e.keyCode === 39){
        self.handleRight()
      }
    })
    window.addEventListener("keyup", function (e) {
      if(e.keyCode === 37 || e.keyCode ===39){
        self.handleDefault()
      }
    })
  }
  
  componentDidMount() {
    this.createKeyEvent()
  }

  render() {
    return (
      <div className="profile-app">
        <div className="app-handler">
          <div className="left handler" 
            onMouseDown={this.handleLeft} 
            onMouseUp={this.handleDefault}
            onTouchStart={this.handleLeft}
            onTouchEnd={this.handleDefault}>
            &lt;
          </div>
          <div className="right handler" 
            onMouseDown={this.handleRight} 
            onMouseUp={this.handleDefault}
            onTouchStart={this.handleRight}
            onTouchEnd={this.handleDefault}>
            &gt;       
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