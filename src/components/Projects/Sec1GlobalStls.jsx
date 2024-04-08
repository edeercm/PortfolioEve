import styled from 'styled-components';

export const Number = styled.h3`
  font-size: 3rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

export const Title = styled.h4`
  line-height: 0.75;
  font-size: 1.575rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    text-align: end;
  }
`;

export const Subtitle = styled.h4`
  font-size: 1.575rem;
  color: var(--secondary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

export const DescLabel = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 2rem;
  }

  @media (max-width: 575.98px) {
  }
`;

export const DescCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    align-items: start;
  }
`;

export const Desc = styled.span`
  font-size: 0.875rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }

  @media (max-width: 575.98px) {
    font-size: 1rem;
  }
`;

export const IconsCont = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    gap: 1.25rem;
  }
`;

export const DesignedLabel = styled.h4`
  font-style: italic;
  font-size: 1.25rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }

  @media (max-width: 575.98px) {
    /* font-size: 1.25rem; */
  }
`;

export const Icon = styled.img`
  width: 3.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 4.5rem;
  }
`;