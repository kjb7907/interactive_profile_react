import React, { Component } from 'react';
import 'assets/styles/character.scss'

class Character extends Component {

  constructor(props) {
    super(props)
    this.state = {
      character: 'charizard',
      form: 'normal',
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
        this.changeAction('normal', 'right')
        break;
      case 'r':
        this.changeAction('run', 'right')
        break;
      case 'l':
        this.changeAction('run', 'left')
        break;
      default:
        break;
    }
  }

  render() {
    let className = `character ${this.state.character} ${this.state.form} ${this.state.direction}`

    return (
      <div className="character-box">
        <div className={className}>
        </div>
      </div>
    );
  }
}

Character.defaultProps = {
  action: 'default'
};

export default Character;