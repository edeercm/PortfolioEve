import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 97.2vh;
  display: flex;
  align-items: center;

  @media (max-width: 991.98px) {
    height: auto;
    padding: 10rem 0 7.5rem;
  }
`;

export const ProjsLabel = styled.h3`
  margin-bottom: 3rem;
  font-size: 4rem;
  letter-spacing: 0.75rem;
  color: var(--secondary-color);

  @media (max-width: 575.98px) {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-style: oblique;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.span`
  font-style: oblique;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.25rem;
  }
`;

export const ImgLabel = styled.span`
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

export const ImgCont = styled.div`
  position: relative;

  &:hover ${ImgLabel} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Img = styled.img`
  width: 95%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 70%;
  }
`

