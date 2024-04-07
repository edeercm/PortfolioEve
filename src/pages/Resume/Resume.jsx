import React from 'react'
import styled from 'styled-components'
import ResSecThree from './ResSecThree'
import ResSecFour from './ResSecFour'
import ResSecFive from './ResSecFive'


const Section = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 6rem 0;
  }
`;

const Persname = styled.h1`
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

const Contonedotone = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    margin-top: 1.25rem;
  }
`;

const Label = styled.h5`
    color: var( --secondary-color);
    font-weight: bold;
    font-size: 1.275rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    /* font-size: 1.5rem; */

  }
`;

const Labelthree = styled.span`
    font-style: oblique;
    color: var(--quaternary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    /* font-size: 1.15rem; */

  }
`;

const Conthree = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.97px) {
    margin-top: 1rem;
  }
`;

const Contfour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {

  }
`;

const Icon = styled.img`
  width: 35%;
  object-fit: contain;
  object-position: center;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    width: 40%;
  }
`;

const Contfive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {

  }
`;

const Resume = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <Persname>Evelin<br></br>Alvarado</Persname>
              </div>
              <div className="col-12 col-md-6">
                <div className='d-flex flex-column align-items-end'>
                  <Email>arq.evelinalvarado@gmail.com</Email>
                  <Number>294 152 5765</Number>
                </div>
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
                {/* <Contonedotone>
                  <Label>Software</Label>
                  <Conthree>
                    <Contfour>
                      <Contfive>
                        <Icon src={autocad} alt="AutoCad-icon" />
                        <Labelthree>AutoCad</Labelthree>
                      </Contfive>
                      <Contfive>
                        <Icon src={illustrator} alt="Illustrator-icon" />
                        <Labelthree>Illustrator</Labelthree>
                      </Contfive>
                      <Contfive>
                        <Icon src={revit} alt="Revit-icon" />
                        <Labelthree>Revit</Labelthree>
                      </Contfive>
                    </Contfour>
                    <Contfour>
                      <Contfive>
                        <Icon src={sketchup} alt="SketchUp-icon" />
                        <Labelthree>SketchUp</Labelthree>
                      </Contfive>
                      <Contfive>
                        <Icon src={photoshop} alt="Photoshop-icon" />
                        <Labelthree>Photoshop</Labelthree>
                      </Contfive>
                    </Contfour>
                    <Contfour>
                      <Contfive>
                        <Icon src={vray} alt="Vray-icon" />
                        <Labelthree>Vray</Labelthree>
                      </Contfive>
                      <Contfive>
                        <Icon src={office} alt="Office-icon" />
                        <Labelthree>Office</Labelthree>
                      </Contfive>
                    </Contfour>
                  </Conthree>
                </Contonedotone> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Resume


