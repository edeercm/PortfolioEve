import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../../assets/images/projects/1.png'
import project2 from '../../assets/images/projects/2.png'
import project3 from '../../assets/images/projects/3.png'
import project4 from '../../assets/images/projects/4.png'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects' className='projs-seccion'>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className='projs-title'>
              <h3>PROJECTS</h3>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3">
                <div className='project-cont'>
                  <div className='proj-img-cont'>
                    <div className='image'>
                      <img src={project1} alt="Project-1" className='proj-img' />
                    </div>
                    <div className='overlay'>
                      <Link to={'/ProjectOne'} className="overlay-text"><span>See project</span></Link>
                    </div>
                  </div>
                  <div className='project-desc-cont'>
                    <span className='proj-name'>CENTRO MULTIFUNCIONAL<br />Y MEMORIAL DE SITIO :</span>
                    <span className='proj-det'>COMUNITARIA 28</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-3">
                <div className='project-cont'>
                  <div className='proj-img-cont'>
                    <div className='image'>
                      <img src={project2} alt="Project-2" className='proj-img' />
                    </div>
                    <div className='overlay'>
                      <Link to={'/ProjectTwo'} className="overlay-text"><span>See project</span></Link>
                    </div>
                  </div>
                  <div className='project-desc-cont'>
                    <span className='proj-name'>REMODELACIÓN COMEDOR</span>
                    <span className='proj-det'>STUDIO YG</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-3">
                <div className='project-cont'>
                  <div className='proj-img-cont'>
                    <div className='image'>
                      <img src={project3} alt="Project-3" className='proj-img' />
                    </div>
                    <div className='overlay'>
                      <Link to={'/ProjectThree'} className="overlay-text"><span>See project</span></Link>
                    </div>
                  </div>
                  <div className='project-desc-cont'>
                    <span className='proj-name'>LUNA Y MAR SPA</span>
                    <span className='proj-det'>Interior design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-3">
                <div className='project-cont'>
                  <div className='proj-img-cont'>
                    <div className='image'>
                      <img src={project4} alt="Project-4" className='proj-img' />
                    </div>
                    <div className='overlay'>
                      <Link to={'/FurnitureProjects'} className="overlay-text"><span>See project</span></Link>
                    </div>
                  </div>
                  <div className='project-desc-cont'>
                    <span className='proj-name'>FURNITURE</span>
                    <span className='proj-det'>Personal Creations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects