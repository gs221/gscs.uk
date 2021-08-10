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
  }

  ul.opaque {
    background-color: rgb(255, 123, 0, 0.98);
  }

  a.opaque {
    color: black;
  }

  li {
    float: left;
    
  }

  li a {
    transition: 0.4s;
    display: block;
    color: ${colors.verySoftWhite};
    text-align: center;
    padding: 0.6rem 1.5rem;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    
    color: ${colors.white}; 
    background-color: rgb(255, 255, 255, 0.15);
  }
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

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <StyledNavbar>
      <ul className={scrolled ? 'opaque' : ''}>
        <li><a className={scrolled ? 'opaque' : ''} href="">Home</a></li>
        <li><a className={scrolled ? 'opaque' : ''} href="">About</a></li>
        <li><a className={scrolled ? 'opaque' : ''} href="">Experience</a></li>
        <li><a className={scrolled ? 'opaque' : ''} href="">Education</a></li>
        <li><a className={scrolled ? 'opaque' : ''} href="">Projects</a></li>
        <li><a className={scrolled ? 'opaque' : ''} href="">Contact</a></li>
      </ul>
    </StyledNavbar>
  );
};