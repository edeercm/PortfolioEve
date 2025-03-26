// import React from 'react';
// import styled from 'styled-components';
// import { GlobalSection } from '../../PSecOneStyles';
// import { Number, Title, Subtitle } from '../../PSecOneStyles';
// import { DescLabel, Desc, IconsCont, DesignedLabel, Icon } from '../../PSecOneStyles';

// const Section = styled(GlobalSection)` // Extender el estilo base
//  @media (min-width: 575.98px) and (max-width: 991.98px) {
//     height: auto;
//     padding: 7.5rem 0 0;
//   }

//   @media (max-width: 575.98px) {
//     height: auto;
//     padding: 6.25rem 0 4rem;
//   }
// `;

// const ProjectSection = ({ pSecOneData }) => {
//   return (
//     <Section>
//       <div className="container">
//         <div className="row gap-4 gap-md-5 gap-lg-0">
//           <div className="col-12 col-lg-6">
//             <div className="position-relative">
//               {pSecOneData.map((project, index) => (
//                 <React.Fragment key={index}>
//                   <img src={project.imgOne} alt='Render one' className='w-100' />
//                   <NameCont>
//                     <Number>{project.number}</Number>
//                     <Title>{project.name}</Title>
//                     <Subtitle>{project.subtitle}</Subtitle>
//                   </NameCont>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//           <div className="col-12 col-lg-6">
//             <div className="row p-1 p-lg-5 gap-4 gap-lg-3">
//               <div className="col-12">
//                 <DescLabel>{pSecOneData[0].label}</DescLabel>
//               </div>
//               <div className="col-12 d-flex flex-column gap-3 gap-lg-2">
//                 {pSecOneData.map((desc, index) => (
//                   <React.Fragment key={index}>
//                     <Desc>{desc.descOne}</Desc>
//                     <Desc>{desc.descTwo}</Desc>
//                     <Desc>{desc.descThree}</Desc>
//                   </React.Fragment>
//                 ))}
//               </div>
//               <div className="col-12">
//                 <IconsCont>
//                   <DesignedLabel>{pSecOneData[0].designedLabel}</DesignedLabel>
//                   <div className="d-flex flex-row justify-content-center gap-3">
//                     {pSecOneData[0].icons && Object.values(pSecOneData[0].icons).map((iconSrc, index) => (
//                       <Icon key={index} src={iconSrc} alt={`Icon ${index}`} />
//                     ))}
//                   </div>
//                 </IconsCont>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default ProjectSection;

import React from 'react'
import styled from 'styled-components';
import { GlobalSection } from './PSecOneStyles';
import PSecOneImg from './PSecOneImg';
import PSecOneInfo from './PSecOneInfo';
import pSecOneData from './PSecOneData'

const Section = styled(GlobalSection)`
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 7.5rem 0 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.25rem 0 4rem;
  }
`;


const PSecOne = () => {
  const { label, designedLabel, autocadIcon, sketchupIcon, vrayIcon, photoshopIcon, projects, styles } = pSecOneData;

  return (
    <Section>
      <div className="container">
        <div className="row gap-4 gap-md-5 gap-lg-0">
          <div className="col-12 col-lg-6">
            <PSecOneImg projects={projects} styles={projects.styles} />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <PSecOneInfo
              label={label}
              designedLabel={designedLabel}
              projects={projects}
              autocadIcon={autocadIcon}
              sketchupIcon={sketchupIcon}
              vrayIcon={vrayIcon}
              photoshopIcon={photoshopIcon}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PSecOne;
