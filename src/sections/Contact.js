import React from "react";
import { useForm } from '@formspree/react';
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledContact = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: calc(100vh - (2rem - 1px));
  color: ${colors.softWhite};

  h1 {
    margin: 0px;
    padding-top: 10vh;
  }

  form {
    display: grid;
    grid-template-columns: auto;
    padding-bottom: 20px;
  }

  h2 {
    font-family: "Roboto Slab", serif;
    margin: 20px 0px;
  }

  label {
    font-family: "Roboto Slab", serif;
    font-size: 0.9rem;
    width: 25rem;
    margin-top: 1vh;
  }

  input, textarea {
    margin: 0.3rem 0;
    padding: 0.3rem;
    border: 1px solid ${colors.verySoftWhite};
    background: ${colors.white};
    border-radius: 0.3rem;
    font: inherit;
    font-size: 0.7rem;
  }

  textarea {
    height: 20vh;
    margin-bottom: 2vh;
    resize: vertical;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    width: 20%;
    font: inherit;
    font-size: 0.6rem;
    letter-spacing: 1.5px;
    height: 30px;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: ${colors.softWhite};
    &:hover {
      background-color: ${colors.white}
    }
  }

  img.tick {
    width: 50%;
    padding: 50px 0px;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  @media all and (max-width: 600px) {
    height: 100vh;

    label {
      max-width: 20rem;
    }

    textarea {
      height: 40vh;
    }

  }
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgerpodp");
  
  if (state.succeeded) {
      return (
        <div>
          <img className="tick" src="tick.svg" alt="tick" />
          <h2>Thank you!</h2>
          <h2>Message Sent</h2>
        </div>
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="John Doe" required minLength="2" />

      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" placeholder="john@example.com" required/>

      <label htmlFor="message">Message</label>
      <textarea name="message" placeholder="Your message. (50 Characters Minimum)" required required minLength="50"/>

      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
}

export const Contact = () => {
  return (
    <StyledContact id="Contact">
      <h1>Contact</h1>
        <ContactForm />
    </StyledContact>
  );
};