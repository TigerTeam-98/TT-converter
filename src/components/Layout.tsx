import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Layout = (props: { children: React.ReactNode }) => {
  return <>
    <Wrapper>
      {props.children}
    </Wrapper>
  </>;
};
