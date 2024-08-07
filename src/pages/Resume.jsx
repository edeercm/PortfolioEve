import React from 'react'
import styled from 'styled-components'
import ResSecThree from '../components/Resume/ResSecThree'
import ResSecFour from '../components/Resume/ResSecFour'
import ResSecFive from '../components/Resume/ResSecFive'

const Section = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 6rem 0;
  }
`;

const Name = styled.h1`
  line-height: 1;
  font-size: 3.925rem;
  text-transform: uppercase;
  color: var( --secondary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    font-size: 3rem;
  }
`;

const Email = styled.h5`
  color: var( --secondary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
`;

const Number = styled.h5`
  color: var( --secondary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    font-size: 1.125rem;
  }
`;

const Resume = () => {
  return <>
    <Section>
      <div className="container mt-4">
        <div className="row gap-5">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-6">
                <Name>Evelin<br></br>Alvarado</Name>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column align-items-end">
                <Email>arq.evelinalvarado@gmail.com</Email>
                <Number>294 152 5765</Number>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-4">
                <ResSecThree />
              </div>
              <div className="col-12 col-md-4">
                <ResSecFour />
              </div>
              <div className="col-12 col-md-4">
                <ResSecFive />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Resume


