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
      locationPoint: this.state.locationPoint + 0.2
    })
  }  

  decrement = ()=>{
    // 오브젝트 좌표감 감소
    this.setState({
      locationPoint: this.state.locationPoint - 0.2
    })
  }

  moveRight = ()=>{
    // 오른쪽으로 이동시 좌표값 감소
    window.clearInterval(layerInterval)
    layerInterval = window.setInterval(()=>{
      this.decrement()
    },10)
  }

  moveLeft = ()=>{
    // 왼쪽으로 이동시 좌표값 증가
    window.clearInterval(layerInterval)
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

        {/* 타이틀 */}
        <div className="object title"></div>

        {/* 프로필 보드 */}
        <div className="object board profile-board">
          <h3 className="title">
            <span className="blue">Developer </span> 
            <span className="yellow">Jbin </span> 
            <span className="red">Profile</span>
          </h3>
          <div className="content">
            <img className="profile-img" src={require('assets/images/object/jbin.png')} alt="jbin"/>
            <div>
              <ul>
                <li>김 정빈(jbin)</li>
                <li>1993.04.10 / Korea</li>
                <li>2020년 기준 4년차</li>
                <li>jbin7@gmail.com</li>
                <li><a href="https://github.com/jbin7" target="_blink">github</a></li>
                <li><a href="https://jhonnywest.tistory.com/" target="_blink">blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 사용언어 보드 */}

        <div className="object board lang-board">
          <h3 className="title">
            <span className="red">experienced - Language</span>
          </h3>
          <div className="content">
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>es6</li>
              <li>python</li>
              <li>SQL</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>css</li>
              <li>scss</li>
            </ul>
          </div>
        </div>

        {/* 프론트엔드 스킬 보드 */}

        <div className="object board frontend-skills-board">
          <h3 className="title">
            <span className="green">frontend - skills</span>
          </h3>
          <div className="content">
            <div className="content-unit">
              <img className="vue-img" src={require('assets/images/object/vue.png')} alt="jbin"/>
              <ul>
                <li>Vue.js</li>
                <li>vuex</li>
                <li>nuxt.js</li>
              </ul>
            </div>
            <div className="content-unit">
              <img className="react-img" src={require('assets/images/object/react.png')} alt="jbin"/>
              <ul>
                <li>React.js</li>
                <li>Redux</li>
              </ul>
            </div>            
            <div className="content-unit">
            <img className="jquery-img" src={require('assets/images/object/jquery.png')} alt="jbin"/>
              <ul>
                <li>jQuery</li>
              </ul>
            </div>              
          </div>
        </div>        

        {/* 백엔드 스킬 보드 */}
        <div className="object board backend-skills-board">
          <h3 className="title">
            <span className="purple">backend - skills</span>
          </h3>
          <div className="content">
            <ul>
              <li>Spring-Framework</li>
              <li>Node.js Express</li>
              <li>Django</li>
              <li>Django REST framework</li>
            </ul>
          </div>
        </div>             

        {/* 기타 보드 */}
        <div className="object board etc-board">
          <h3 className="title">
            <span className="yellow">ETC / Tools</span>
          </h3>
          <div className="content">
            <ul>
              <li>AWS</li>
              <li>EC2</li>
              <li>RDS</li>
              <li>S3</li>
              <li>docker</li>
            </ul>
            <ul>
              <li>vscode</li>
              <li>webstorm</li>
              <li>inteliJ</li>
            </ul>
          </div>
        </div>      

      </div>
    );
  }
}

export default ObjectLayer;