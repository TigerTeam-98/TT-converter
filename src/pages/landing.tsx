import React from "react";
import styled from "styled-components";
import { SpaceProps, space } from "styled-system";
import { Typography } from "antd";

const { Title } = Typography;

const Wrapper = styled.div<SpaceProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space}
`;

interface State {
  text: string;
}

export class Landing extends React.Component<{}, State> {

  state = {
    text: "",
  };

  render() {
    return (
      <Wrapper mt={4}>
        <Title level={2}>TT-converter</Title>
      </Wrapper>
    );
  }

}
