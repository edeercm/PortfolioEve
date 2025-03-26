import React from 'react'
import { DescLabel, Desc, IconsCont, DesignedLabel, Icon } from './PSecOneStyles';

const PSecOneInfo = ({ label, designedLabel, projects, autocadIcon, sketchupIcon, vrayIcon, photoshopIcon }) => {
  return (
    <div className="row p-1 p-lg-5 gap-4 gap-lg-3">
      <div className="col-12">
        <DescLabel>{label}</DescLabel>
      </div>
      <div className="col-12 d-flex flex-column gap-3 gap-lg-2">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Desc>{project.descOne}</Desc>
            <Desc>{project.descTwo}</Desc>
            <Desc>{project.descThree}</Desc>
          </React.Fragment>
        ))}
      </div>
      <div className="col-12">
        <IconsCont>
          <DesignedLabel>{designedLabel}</DesignedLabel>
          <div className="d-flex flex-row justify-content-center gap-3">
            <Icon src={autocadIcon} alt="autocad" />
            <Icon src={sketchupIcon} alt="sketchup" />
            <Icon src={vrayIcon} alt="vray" />
            <Icon src={photoshopIcon} alt="photoshop" />
          </div>
        </IconsCont>
      </div>
    </div>
  )
}

export default PSecOneInfo