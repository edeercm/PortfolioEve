import React from 'react'
import styled from 'styled-components'
import autocad from '../../assets/images/icons/autocad.png'
import sketchup from '../../assets/images/icons/sketchup.png'
import vray from '../../assets/images/icons/vray.png'
import illustrator from '../../assets/images/icons/illustrator.png'
import photoshop from '../../assets/images/icons/photoshop.png'
import office from '../../assets/images/icons/office.png'
import revit from '../../assets/images/icons/revit.png'


import ResSecThree from './ResSecThree'

const Resumesecc = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  align-items: center;
  background-color: var( --principal-color);


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

const Contone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
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

const Contwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {

  }
`;

const Labeltwo = styled.span`
    font-weight: bold;
    color: var(--quaternary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }


  @media (max-width: 575.97px) {
    /* font-size: 1.15rem; */

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

const Labelfour = styled.span`
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
    <Resumesecc>
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
              <div className="col-12 col-md-4 d-flex flex-column gap-3">
                <ResSecThree />
                {/* <div className='education'>
                  <Label>Education</Label>
                  <Contwo>
                    <Labeltwo>Universidad Veracruzana</Labeltwo>
                    <Labelthree>Bachelor of Architecture</Labelthree>
                    <Labelfour>2016 - 2021</Labelfour>
                  </Contwo>
                </div>
                <div className='work-experience'>
                  <Label>Work Experience</Label>
                  <Contwo>
                    <Labeltwo>Studio YG</Labeltwo>
                    <Labelthree>Design Assistant</Labelthree>
                    <Labelfour>2021 - 2021</Labelfour>
                  </Contwo>
                  <Contwo>
                    <Labeltwo>BIOMASA</Labeltwo>
                    <Labelthree>Administrative Leader</Labelthree>
                    <Labelfour>2021 - 2023</Labelfour>
                  </Contwo>
                </div> */}
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Contone>
                  <div className='lenguages mt-3 mt-md-0 mt-lg-0 mt-xl-0'>
                    <Label>Languages</Label>
                    <Contwo>
                      <Labeltwo>Spanish</Labeltwo>
                      <Labelthree>Native</Labelthree>
                    </Contwo>
                    <Contwo>
                      <Labeltwo>English</Labeltwo>
                      <Labelthree>Intermediate</Labelthree>
                    </Contwo>
                  </div>
                  <div className='skills'>
                    <Label>Skills</Label>
                    <Contwo>
                      <Labelthree>Effective in client communication and fostering teamwork in diverse groups.</Labelthree>
                      <Labelthree>Problem-solving.</Labelthree>
                      <Labelthree>Punctuality.</Labelthree>
                      <Labelthree>Commitment.</Labelthree>
                      <Labelthree>Creativity.</Labelthree>
                      <Labelthree>Leadership.</Labelthree>
                    </Contwo>
                  </div>
                </Contone>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Contonedotone>
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
                </Contonedotone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resumesecc>
  </>
}

export default Resume


