import { createGlobalStyle } from "styled-components";
import { colors } from "../helpers/colors";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;

    font-family: "Seravek-Light", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 32px;
    line-height: 1.5;
    color: ${colors.darkText};

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("hero.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    overflow: auto;
    scroll-behavior: smooth;

    scroll-padding-top: calc(2rem - 1px);
  }
  
  main, div {
    height: 100%;
    
  }

  h1 {
    color: ${colors.lightText};
    font-family: "Courier New", monospace;
    font-size: 1.75rem;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #808080;

    &:hover {
      color: ${colors.orange};
    }
    transition: 0.3s;
  }

  @media all and (max-width:2000px) {
    body, html {
      font-size: 25px;
    }
  };

  @media all and (max-width:1600px) {
    body, html {
      font-size: 20px;
    }
  };

  @media all and (max-width:1000px) {
    body, html {
      font-size: 18px;
    }
  };

  @media all and (max-width:600px) {
    body, html {
      font-size: 17px;
      scroll-padding-top: 0px;
    }
  };


`;
