import React from 'react'
import { LblOne, LblTwo, LblThree, LblFour } from './ResGlobalSty'

const ResSecFour = () => {
  return <>
    <div className="d-flex flex-column gap-3">
      <div className='d-flex flex-column gap-2 mt-3 mt-md-0'>
        <LblOne>Languages</LblOne>
        <div className='d-flex flex-column'>
          <LblTwo>Spanish</LblTwo>
          <LblThree>Native</LblThree>
        </div>
        <div className='d-flex flex-column'>
          <LblTwo>English</LblTwo>
          <LblThree>Intermediate</LblThree>
        </div>
      </div>
      <div className='d-flex flex-column gap-2'>
        <LblOne>Skills</LblOne>
        <div className='d-flex flex-column'>
          <LblThree>Effective in client communication and fostering teamwork in diverse groups.</LblThree>
          <LblThree>Problem-solving.</LblThree>
          <LblThree>Punctuality.</LblThree>
          <LblThree>Commitment.</LblThree>
          <LblThree>Creativity.</LblThree>
          <LblThree>Leadership.</LblThree>
        </div>
      </div>
    </div>
  </>
}

export default ResSecFour