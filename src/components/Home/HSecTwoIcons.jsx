import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Icon = styled.a`
  svg {
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--quaternary-color);

    @media (max-width: 575.97px) {
      font-size: 1.5rem;
    }
  }
`;

const HSecTwoIcons = () => {
  return (
    <div className='d-flex gap-2'>
      <Icon
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/e.a_creativestudio/">
        <FaInstagram />
      </Icon>
      <Icon
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/evelinohemi-alvarado/">
        <FaLinkedin />
      </Icon>
    </div>
  );
}

export default HSecTwoIcons