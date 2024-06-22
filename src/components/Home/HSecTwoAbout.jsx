import React from 'react'
import styled from 'styled-components'

const About = styled.span`
  font-size: 1.125rem;
  color: var(--quaternary-color);

  @media (max-width: 991.98px) {
    font-size: 1rem;
  }

  @media (max-width: 575.97px) {
    text-align: center;
  }
`;

const HSecTwoAbout = () => {
  return <>
    <About>
      I am an architect and interior designer passionate about creating inspiring and functional spaces.
    </About>
    <About>
      My commitment to innovation and excellence constantly drives me to improve and stay updated on the latest trends in architecture and interior design.
    </About>
  </>
}

export default HSecTwoAbout