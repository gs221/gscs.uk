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


  // Calculate employment length at mcdonalds
  var mcDonaldsStart = new Date(2018, 9, 10);
  var todaysDate = new Date();

  var diff = new Date(todaysDate.getTime() - mcDonaldsStart.getTime());

  var yearsEmployed = diff.getUTCFullYear() - 1970;
  var monthsEmployed = diff.getUTCMonth()

  return (
    <StyledExperience id="Experience">
      <h1>Experience</h1>
        
      <div className="experience-container">
        
        <img className="standrews" src="st-andrews-logo.png" alt="Univerity of St Andrews Logo" />
        <div className="content-container">
          <h2>Internship - University of St Andrews Academic Registry</h2>
          <h3>June 2021 - July 2021 · 6 Weeks</h3>
          <p>I wrote a flexible terminal-based Python program to aid in the management of their data.</p>
          <a href="https://github.com/gs221/RegistryDataTool" target="_blank" rel="noreferrer">Repository</a>
          <a href="https://universityofstandrews907-my.sharepoint.com/:b:/g/personal/gs221_st-andrews_ac_uk/ESieROdIsS1Agpn9901eojABfdXNA3WMsH2X8QS1WMHMkg?e=007ENG" target="_blank" rel="noreferrer">Final Presentation</a>
        </div>
      
        <img className="mcdonalds" src="mcdonalds.svg" alt="McDonalds Logo" />
        <div className="content-container">
          <h2>McDonalds</h2>
          <h3>October 2018 - Present · {yearsEmployed} yrs {monthsEmployed} mos</h3>
          <p>
          I have worked at McDonalds for almost three years and throughout my time there I have learned 
          and reinforced many transferable skills. I have to work in a team, do multiple jobs simultaneously 
          whilst maintaining composure and precision under constant pressure to deliver high standards. 
          </p>
        </div>
        
      </div>


    </StyledExperience>
  );
};