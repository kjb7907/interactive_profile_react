import React, { Component } from 'react';
import 'assets/styles/stage.scss'

class Stage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: 'paused',
      direction: 'right',
    }
  }

  changeAction = (form,direction)=>{
    this.setState({
      form: form,
      direction: direction
    })
  }

  componentWillReceiveProps(nextProps){
    // 부모에게서 받은 props 가 변경되었을때의 라이프 사이클 훅
    let {action} = nextProps
    switch (action) {
      case 'd':
        this.changeAction('paused', 'right')
        break;
      case 'r':
        this.changeAction('move', 'right')
        break;
      case 'l':
        this.changeAction('move', 'left')
        break;
      default:
        break;
    }
  }  

  render() {
    let className = `stage ${this.state.form} ${this.state.direction}`
    return (
      <div className={className}></div>
    );
  }
}

export default Stage;