import React from 'react';
import Dropzone from 'react-dropzone';
import './App.css';

interface State {
  text: string;
}

class App extends React.Component<{}, State> {

  state = {
    text: ''
  };

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

  onBlurOutFocus = () => {
    this.setState({ text: '' })
  }

}

export default App;
