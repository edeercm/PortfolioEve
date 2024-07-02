import styled from 'styled-components';

export const GlobalSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.75rem;
  }

  @media (max-width: 575.98px) {
    font-size: 1rem;
  }
`;