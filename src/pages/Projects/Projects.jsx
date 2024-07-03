import React from 'react';
import { Link } from 'react-router-dom';
import { Section, ProjectsLabel, ImgCont, Img, ImgLabel, Title, Subtitle } from './ProjectsStyles';
import projectsData from './ProjectsData';

const Projects = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <ProjectsLabel>PROJECTS</ProjectsLabel>
          </div>
          {projectsData.map((project, index) => (
            <div key={index} className='col-12 col-lg-3 d-flex flex-column text-center align-items-center mb-5 mb-lg-0'>
              <Link to={project.link}>
                <ImgCont>
                  <Img src={project.image} alt={`Project-${index + 1}`} />
                  <ImgLabel>See project</ImgLabel>
                </ImgCont>
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
  );
}

export default Projects;

