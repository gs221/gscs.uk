import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledProjects = styled.section`
  margin: auto;
  width: 100%;
  background: ${colors.white};

  h1 {
    color: ${colors.darkText};
    margin: 0px;
  }
`;

export const Projects = () => {
  return (
    <StyledProjects id="Projects">
      {/* <h1>Projects</h1> */}
    </StyledProjects>
  );
};