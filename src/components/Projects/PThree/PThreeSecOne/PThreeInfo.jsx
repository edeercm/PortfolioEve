import React from 'react'
import { DescLabel, Desc, IconsCont, DesignedLabel, Icon } from '../../Sec1GlobalStls';
import pSecOneData from '../../PSecOneData';

const PThreeInfo = () => {
  const { label, projectThree, designedLabel, autocadIcon, sketchupIcon, vrayIcon, photoshopIcon } = pSecOneData;

  return (
    <div className="row p-1 p-lg-5 gap-4 gap-lg-3">
      <div className="col-12">
        <DescLabel>{label}</DescLabel>
      </div>
      <div className="col-12 d-flex flex-column gap-3 gap-lg-2">
        {projectThree.map((desc, index) => (
          <React.Fragment key={index}>
            <Desc>{desc.descOne}</Desc>
            <Desc>{desc.descTwo}</Desc>
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

export default PThreeInfo