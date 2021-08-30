import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledEducation = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("education.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.white};
    padding-bottom: 10vh;

    div.education-container {
      margin: auto;
      max-width: 50%;
    }

    h1 {
      margin: 0px;
      padding-top: 10vh;
      padding-bottom: 5vh;
      text-align: center;
    }

    h2 {
      font-family: 'Roboto Slab', serif;
      font-size: 1rem;
    }

    p {
      color: ${colors.softWhite};
    }

    @media all and (max-width:600px) {
      div.education-container {
        max-width: 90%;
      }
    }
`;

export const Education = () => {
  return (
    <StyledEducation id="Education">
      <div className="education-container">
        <h1>Education</h1>
        <h2>Year 5 - Graduate June 2023</h2>
        <p>On track to graduate with a first.</p>
        <h2>Year 4 - Current</h2>
        <p>Provisional: Signal processing (sound, image, video), Component technology, Computer security, Constraint programming, Databases, Computer graphics, Visual analytics, Video games.</p>
        <h2>Year 3 - Average Grade: 17.0/20</h2>
        <p>Artificial intelligence, Data encoding, Logic and reasoning, Computational complexity, Data communications and networks, Human computer interaction, Software engineering team project.</p>
        <h2>Year 2 - Average Grade: 17.5/20</h2>
        <p>Foundations of computation, The internet and the web: concepts and programming, Advanced programming projects, Computer systems.</p>
        <h2>Year 1 - Average Grade: 13.8/20</h2>
        <p style={{marginBottom: "0px"}}>Object-orientated programming, Programming with data, Programming projects, Introductory mathematics, Mathematics, Physics 1A.</p>
      </div>
    </StyledEducation>
  );
};