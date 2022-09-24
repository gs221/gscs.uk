import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledExperience = styled.section`
  margin: auto;
  width: 100%;
  background: ${colors.white};
  padding-bottom: 10vh;

  h1 {
      margin: 0px;
      padding-top: 10vh;
      padding-bottom: 1vh;
      text-align: center;
      color: ${colors.darkText};
    }

  h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    padding-top: 30px;
  }

  h3 {
    font-family: 'Roboto Slab', serif;
    font-size: 0.9rem;
  }

  div.experience-container {
    margin: auto;
    max-width: 60%;
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-column-gap: 0%;
    align-items: center;
  }

  img {
    width: 60%;
    margin: auto;
    display: block;
  }

  img.mcdonalds {
    width: 50%;
  }

  a {
    padding-right: 20px;
    font-family: 'Tillana', cursive;
  }

  @media all and (max-width:600px) {
    div.experience-container {
      max-width: 90%;
      grid-template-columns: auto;
    }

    img {
      display: none;
    }
  }

`;

export const Experience = () => {
  return (
    <StyledExperience id="Experience">
      <h1>Experience</h1>
        
      <div className="experience-container">
        
        <img className="standrews" src="st-andrews-logo.png" alt="Univerity of St Andrews Logo" />
        <div className="content-container">
          <h2>Internship - University of St Andrews Academic Registry</h2>
          <h3>June 2021 - July 2021 · 6 Weeks</h3>
          <p>
            I developed and deployed a flexible terminal-based Python program to automate the 
            cleaning and deduplication of large datasets, containing information about UK 
            and global schools, as part of the registry's workflow. 
          </p>
          <a href="https://github.com/gs221/RegistryDataTool" target="_blank" rel="noreferrer">Repository</a>
          <a href="docs/registry-presentation.pdf" target="_blank" rel="noreferrer">Final Presentation</a>
        </div>
      
        <img className="mcdonalds" src="mcdonalds.svg" alt="McDonalds Logo" />
        <div className="content-container">
          <h2>Crew Member - McDonalds</h2>
          <h3>October 2018 - August 2022 · 4 Years</h3>
          <p>
            I worked at McDonalds for four years. My responsibilities included food preparation and customer service.
            My time at McDonalds made me a better communicator, multitasker, team member and has underlined the importance of thoughtful system design.
          </p>
        </div>
        
      </div>


    </StyledExperience>
  );
};