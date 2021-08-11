import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledEducation = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("education.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.white};
    padding-bottom: 50px;

    div.education-container {
      margin: auto;
      max-width: 50%;
    }

    h1 {
      margin: 0px;
      padding-top: 15vh;
      padding-bottom: 10px;
      text-align: center;
    }

    h2 {
      font-family: 'Roboto Slab', serif;
      font-size: 1rem;
    }
`;

export const Education = () => {
  return (
    <StyledEducation>
      <div className="education-container">
        <h1>Education</h1>
        <h2>Year 5 - Graduate June 2023</h2>
        <p>content</p>
        <h2>Year 4 - Current</h2>
        <p>content</p>
        <h2>Year 3</h2>
        <p>content</p>
        <h2>Year 2</h2>
        <p>content</p>
        <h2>Year 1</h2>
        <p style={{marginBottom: "0px"}}>content</p>
      </div>
    </StyledEducation>
  );
};