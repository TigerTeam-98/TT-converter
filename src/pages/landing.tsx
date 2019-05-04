import React from "react";
import styled from "styled-components";
import { SpaceProps, space } from "styled-system";
import { Input, Typography } from "antd";
import unorm from "unorm";

const { Title } = Typography;

const Wrapper = styled.div<SpaceProps>`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space}
`;

interface State {
  mode: "nfc" | "nfd";
  text: string;
  convertedText: string;
}

export class Landing extends React.Component<{}, State> {

  state: State = {
    mode: "nfd",
    text: "",
    convertedText: "",
  };

  render() {
    return (
      <Wrapper pt={4}>
        <Title level={2}>TT-converter</Title>
          <Input
            value={this.state.text}
            onChange={this.handleTextChange} />
          <Input
            disabled
            value={this.state.convertedText} />
      </Wrapper>
    );
  }

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value,
      convertedText: this.convertText(e.target.value),
    });
  }

  convertText(text: string): string {
    switch (this.state.mode) {
      case "nfc":
        return unorm.nfc(text);
      case "nfd":
        return unorm.nfd(text);
      default:
        return "";
    }
  }

}
