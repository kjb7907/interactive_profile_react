import React, { Component } from 'react';
import 'assets/styles/object_layer.scss'
import 'assets/styles/object.scss'

let layerInterval

class ObjectLayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationPoint: 0, // 오브젝트레이어 좌표값 (mrgin-left 값)
    }
  }

  increment = ()=>{
    // 오브젝트 좌표값 증가
    this.setState({
      locationPoint: this.state.locationPoint + 0.15
    })
  }  

  decrement = ()=>{
    // 오브젝트 좌표감 감소
    this.setState({
      locationPoint: this.state.locationPoint - 0.15
    })
  }

  moveRight = ()=>{
    // 오른쪽으로 이동시 좌표값 감소
    layerInterval = window.setInterval(()=>{
      this.decrement()
    },10)
  }

  moveLeft = ()=>{
    // 왼쪽으로 이동시 좌표값 증가
    layerInterval = window.setInterval(()=>{
      this.increment()
    },10)
  }

  pauseMove = ()=> {
    window.clearInterval(layerInterval)
  }

  componentWillReceiveProps(nextProps){
    // 부모에게서 받은 props 가 변경되었을때의 라이프 사이클 훅
    let {action} = nextProps
    switch (action) {
      case 'd':
        this.pauseMove()
        break;      
      case 'r':
        this.moveRight()
        break;
      case 'l':   
        this.moveLeft() 
        break;
      default:
        break;
    }
  }  

  render() {
  
    let style = {
      "marginLeft": `${this.state.locationPoint}vw` 
    }
    return (
      <div className="object-layer" style={style}>
        <div className="object title">
        </div>
        <div className="object pannel-1">
        </div>
      </div>
    );
  }
}

export default ObjectLayer;