import React from 'react'
import styled from 'styled-components';
import POneImg from './POneImg';
import POneInfo from './POneInfo';
import { GlobalSection } from '../POneGlobStyles';

const Section = styled(GlobalSection)` // Extender el estilo base
 @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 7.5rem 0 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.25rem 0 4rem;
  }
`;

const POneSecOne = () => {
  return (
    <Section>
      <div className="container">
        <div className="row gap-4 gap-md-5 gap-lg-0">
          <div className="col-12 col-lg-6">
            <POneImg />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end align-items-center">
            <POneInfo />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default POneSecOne