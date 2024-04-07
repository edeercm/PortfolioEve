import React from 'react'
import { LblOne, LblTwo, LblThree, LblFour } from './ResGlobalSty'

const ResSecThree = () => {
  return <>
    <div className='d-flex flex-column gap-2'>
      <LblOne>Education</LblOne>
      <div className='d-flex flex-column'>
        <LblTwo>Universidad Veracruzana</LblTwo>
        <LblThree>Bachelor of Architecture</LblThree>
        <LblFour>2016 - 2021</LblFour>
      </div>
    </div>
    <div className='d-flex flex-column gap-2'>
      <LblOne>Work Experience</LblOne>
      <div className='d-flex flex-column'>
        <LblTwo>Studio YG</LblTwo>
        <LblThree>Design Assistant</LblThree>
        <LblFour>2021 - 2021</LblFour>
      </div>
      <div className='d-flex flex-column'>
        <LblTwo>BIOMASA</LblTwo>
        <LblThree>Administrative Leader</LblThree>
        <LblFour>2021 - 2023</LblFour>
      </div>
    </div>
  </>
}

export default ResSecThree