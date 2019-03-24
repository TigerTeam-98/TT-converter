import React from "react";

interface State {
  text: string;
}

export class Landing extends React.Component<{}, State> {

  state = {
    text: "",
  };

  render() {
    return <>
      <label>입력할 텍스트 : </label>
      <input type="text"
        value={this.state.text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.setState({text : event.target.value})}
        placeholder="텍스트입력해랑"
        onBlur={this.onBlurOutFocus}/>
      <p>입력한 텍스트 : {this.state.text}</p>
    </>;
  }

  onBlurOutFocus = () => {
    this.setState({ text: "" });
  }

}
