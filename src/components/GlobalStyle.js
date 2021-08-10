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
      width: 5px;
      height: 6px;
    }

    &::-webkit-scrollbar-corner {
      background: #f8f9f9;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgb(255, 255, 255, 0.2);
      transition: background 0.3s;
      &:hover {
        background: rgb(255, 255, 255, 0.2);
      }
    }

    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("hero.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    overflow: auto;
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
    }
  };


`;
