import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../helpers/colors";

const StyledNavbar = styled.nav`
  ul {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.7rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(255, 255, 255, 0.1);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    transition: 1s;
    color: ${colors.verySoftWhite};
  }

  ul.opaque {
    background-color: ${colors.orange};
    color: ${colors.black};
  }

  li {
    float: left;
    color: inherit;
  }

  li a {
    transition: 0.4s;
    display: block;
    color: inherit;
    text-align: center;
    padding: 0.6rem 1.5rem;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    color: ${colors.white}; 
    background-color: rgb(255, 255, 255, 0.15);
  }

  @media all and (max-width:600px) {
    ul {
      display: none;
    }
  };
`

export const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const fix = () => {
    alert('This will work soon :)');
  };

  return (
    <StyledNavbar>
      <ul className={scrolled ? 'opaque' : ''}>
        <li><a href="/" onClick={fix}>Home</a></li>
        <li><a href="/about" onClick={fix}>About</a></li>
        <li><a href="/education" onClick={fix}>Education</a></li>
        <li><a href="/experience" onClick={fix}>Experience</a></li>
        <li><a href="/projects" onClick={fix}>Projects</a></li>
        <li><a href="/contact" onClick={fix}>Contact</a></li>
      </ul>
    </StyledNavbar>
  );
};