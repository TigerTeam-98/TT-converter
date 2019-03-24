import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Document = () => (
  <Helmet>
    <style>{`
      body, #app {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
  </Helmet>
);

const Wrapper = styled.div`
`;

export const Layout = (props: { children: React.ReactNode }) => {
  return <>
    <Document />
    <Wrapper>
      {props.children}
    </Wrapper>
  </>;
};
