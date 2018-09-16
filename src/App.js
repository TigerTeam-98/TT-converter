import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onBlurOutFocus = this.onBlurOutFocus.bind(this);
  }

  onBlurOutFocus() {
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <label>입력할 텍스트 : </label>
        <input type="text"
               value={this.state.text}
               onChange={event => this.setState({text : event.target.value})} 
               placeholder="텍스트입력해랑"
               onBlur={this.onBlurOutFocus}/>
        <p>입력한 텍스트 : {this.state.text}</p>
        </div>
    );
  }
}

export default App;
