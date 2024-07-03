import React from 'react'
import styled from 'styled-components';
// import POneImg from './POneImg';
import PTwoInfo from './PTwoInfo';
import { GlobalSection } from '../../Sec1GlobalStls';

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

const PTwoSecOne = () => {
  return (
    <Section>
      <div className="container">
        <div className="row gap-4 gap-md-5 gap-lg-0">
          <div className="col-12 col-lg-6">
            {/* <PTwoImg /> */}
          </div>
          <div className="col-12 col-lg-6">
            <PTwoInfo />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PTwoSecOne