import React from 'react'
import styled from 'styled-components'

const ImgLabel = styled.span`
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  background-color: white;
  transition: opacity 0.4s ease-in;
`

const ImgCont = styled.div`
  position: relative;

  &:hover ${ImgLabel} {
    opacity: 1;
    visibility: visible;
  }
`;

const Img = styled.img`
  width: 95%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 70%;
  }
`

const ProjImg = ({ project, index }) => {
  return <>
    <ImgCont>
      <Img src={project.image} alt={`Project-${index + 1}`} />
      <ImgLabel>See project</ImgLabel>
    </ImgCont>
  </>
}

export default ProjImg