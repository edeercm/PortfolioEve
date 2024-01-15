import styled from 'styled-components';

export const ContOne = styled.div`
width: 85%;

@media (min-width: 575.98px) and (max-width: 991.98px) {
  width: 100%;
}

@media (max-width: 575.97px) {
  width: 100%;
}
`;

export const ConTwo = styled.div`
position: relative;
width: 100%;
height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const Number = styled.h3`
  font-size: 3.25rem;
  color: var(--quaternary-color);
`;

export const Title = styled.h4`
line-height: 0.75;
font-size: 1.575rem;
`;

export const ContFive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1.25rem;
`;

export const LabelOne = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: var(--quaternary-color);
  font-weight: bold;
  letter-spacing: 0.15rem;
`;

export const LabelTwo = styled.span`
  color: var(--quaternary-color);
  font-size: 0.915rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.125rem;
  }
`;

export const ContSix = styled.div`
    margin-top: 1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 575.98px) and (max-width: 991.98px) {
    }

    @media (max-width: 575.97px) {
    }
`;

export const LabelThree = styled.h4`
    color: var(--quaternary-color);
    font-style: italic;
    font-size: 1.25rem;
`;

export const Icon = styled.img`
    width: 12.25%;

    @media (max-width: 575.97px) {
        width: 15.75%;
    }  
`;
