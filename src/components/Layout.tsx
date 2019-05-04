import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

export const Layout = (props: { children: React.ReactNode }) => {
  return <>
    <Wrapper>
      {props.children}
    </Wrapper>
  </>;
};
