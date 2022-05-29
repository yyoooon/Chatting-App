import React from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    color: #000;
    width: 100%;
    max-width: 500px;
    min-width: 320px;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  button,
  input,
  select,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
