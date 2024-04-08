import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import projsData from './projsData';
import ProjImg from './ProjImg';

const Section = styled.section`
  width: 100%;
  height: 97.2vh;
  display: flex;
  align-items: center;

  @media (max-width: 991.98px) {
    height: auto;
    padding: 10rem 0 7.5rem;
  }
`

const ProjsLabel = styled.h3`
  margin-bottom: 3rem;
  font-size: 4rem;
  letter-spacing: 0.75rem;
  color: var(--secondary-color);

  @media (max-width: 575.98px) {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
  }
`

const Title = styled.span`
  font-weight: bold;
  font-style: oblique;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }
`

const Subtitle = styled.span`
  font-style: oblique;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.25rem;
  }
`

const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <ProjsLabel>PROJECTS</ProjsLabel>
          </div>
          {projsData.map((project, index) => (
            <div key={index} className='col-12 col-lg-3 d-flex flex-column text-center align-items-center mb-5 mb-lg-0'>
              <Link to={project.link}>
                <ProjImg project={project} index={index} />
              </Link>
              <div className='d-flex flex-column mt-4 gap-2'>
                <Title>{project.title}</Title>
                <Subtitle>{project.subtitle}</Subtitle>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects;
