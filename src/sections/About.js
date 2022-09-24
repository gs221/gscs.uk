import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledAbout = styled.section`
  margin: auto;
  width: 100%;
  background: ${colors.white};

  div.about-container {
    margin: auto;
    max-width: 70%;
    display: flex;
    align-items: center;
    padding-bottom: 10vh;
  }

  h1 {
    color: ${colors.darkText};
    padding-top: 10vh;
    margin-bottom: 0px;
    text-align: center;
    padding-bottom: 10px;
  }

  p {
    margin-top: 0px;
  }

  a {
    font-family: 'Tillana', cursive;

  }

  img {
    width: 30%;
    padding-left: 100px;
    padding-top: 75px;
  }

  @media all and (max-width:600px) {
    img {
      display: none;
    }

    div.about-container {
      max-width: 90%;
    }
  };
`

export const About = () => {
  return (
    <StyledAbout id="About">
      <div className="about-container">
        <div>
          <h1>About</h1>
          <p>
            Dedicated computer science student, skilled in teamwork and leadership with a solid 
            foundation in mathematics, logic, and a broad range of programming languages. 
            Determined to innovate and excel, leveraging past experience from university and 
            the workplace. 
          </p> 
          {/* <a href="docs/cv.pdf" target="_blank" rel="noreferrer">CV / Résumé</a> */}
        </div>
        <img src="hello.svg" alt="Hello" />
      </div>
    </StyledAbout>
  );
};