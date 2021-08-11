import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledHero = styled.section`
  color: ${colors.lightText};
  font-family: "courier new", monospace;
  text-align: center;
  padding-bottom: 20vh;

  height:100%;
  max-width: 60%;
  margin: auto;
  
  img {
    margin-top: 19vh;
    border-radius: 50%;
    width: 12rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  }

  .fa {
    padding: 1rem;
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    text-decoration: none;
    margin: 0.1rem 0.7rem;
    border-radius: 50%;
  }

  .fa-linkedin {
    background: rgb(255, 255, 255, 0.2);
    color: ${colors.white};
    &:hover {
      background: #007bb5;
      color: ${colors.solidWhite};
    }
    transition: 0.3s;
  }

  .fa-envelope {
    background: rgb(255, 255, 255, 0.2);
    color: ${colors.white};
    &:hover {
      background: ${colors.orange};
      color: ${colors.solidWhite};
    }
    transition: 0.3s;
  }

  .fa-github {
    background: rgb(255, 255, 255, 0.2);
    color: ${colors.white};
    &:hover {
      background: ${colors.white};
      color: ${colors.black};
    }
    transition: 0.3s;
  }

  @media all and (max-width:1400px) {
    max-width: 70%;
  };

  @media all and (max-width:500px) {
    max-width: 95%;
  };

`;

export const Hero = () => {
  return (
    <StyledHero>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <img src="avatar.jpg" alt="Avatar" />
      <h1>Gregor Soutar</h1>
      <p>
        Penultimate year undergraduate student at the University of St
        Andrews, pursuing an Integrated Masters degree in Computer Science.
      </p>
      <a href="https://www.linkedin.com/in/gregorsoutar/" className="fa fa-linkedin" target="_blank" rel="noreferrer"> </a>
      <a href="mailto:gregor@gscs.uk" className="fa fa-envelope"> </a>
      <a href="https://github.com/gs221" className="fa fa-github" target="_blank" rel="noreferrer"> </a>
    </StyledHero>
  );
};
