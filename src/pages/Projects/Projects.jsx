import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import projsData from './projsData';
import ProjImg from './ProjImg';

const Section = styled.section`
  width: 100%;
  height: 97.2vh;
  display: flex;
  text-align: center;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 10rem 0 7rem;
  }
`

const Label = styled.h3`
  margin-bottom: 2.5rem;
  font-size: 3.5rem;
  letter-spacing: 0.75rem;
  color: var(--secondary-color);
`

const ProjName = styled.span`
  font-weight: bold;
  /* font-size: 0.95rem; */
  font-style: oblique;
  color: var(--quaternary-color);
`

const ProjSubtitle = styled.span`
  /* font-size: 0.85rem; */
  font-style: oblique;
  color: var(--quaternary-color);
`

const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Label>PROJECTS</Label>
          </div>
          {projsData.map((project, index) => (
            <div key={index} className="col-12 col-lg-3">
              <div className='d-flex flex-column align-items-center'>
                <Link to={project.link}>
                  <ProjImg project={project} index={index} />
                </Link>
                <div className='d-flex flex-column mt-4 gap-2'>
                  <ProjName>{project.title}</ProjName>
                  <ProjSubtitle>{project.subtitle}</ProjSubtitle>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects;
