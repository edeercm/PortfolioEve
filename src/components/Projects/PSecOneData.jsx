// PROJECT ICONS //
import autocad from '../../assets/images/icons/autocad.png'
import sketchup from '../../assets/images/icons/sketchup.png'
import vray from '../../assets/images/icons/vray.png'
import photoshop from '../../assets/images/icons/photoshop.png'

// PROJECT IMAGES //
//-> Project One <-//
import poneimgone from '../../assets/images/projectone/one.jpg'
import poneimgtwo from '../../assets/images/projectone/two.jpg';
import poneimgthree from '../../assets/images/projectone/three.jpg'
import poneumgfour from '../../assets/images/projectone/four.jpg'
import poneimgfive from '../../assets/images/projectone/five.png';
//-> Project Two <-//
import ptwoimgone from '../../assets/images/projectwo/one.png'
//-> Project Three  <-//
import pthreeimgone from '../../assets/images/projecthree/one.png'


const PSecOneData = {
  label: 'Description',
  designedLabel: 'Designed with',
  autocadIcon: autocad,
  sketchupIcon: sketchup,
  vrayIcon: vray,
  photoshopIcon: photoshop,
  projectOne: [
    { 
      imgOne: poneimgone,
      number: '01',
      name: 'CENTRO MULTIFUNCIONAL Y MEMORIAL DE SITIO:',
      subtitle: 'COMUNITARIA 28',
      descOne: 'San Bruno has been characterized by being a neighborhood with numerous social and environmental problems, coupled with a lack of access to recreational and cultural activities, nearby health services, and areas designated for sports activities.',
      descTwo: 'The purpose of the project is to generate a restoration proposal to commemorate and contrast with what has already been built, with spaces that give rise to social interaction dynamics, applying the concept of multifunctionality to the design of these spaces.',
      descThree: 'This aims to demonstrate that it is possible to develop quality architecture in the marginalized sectors of the city. This was my Thesis project in collaboration with Iván Moreno.',
      imgTwo: poneimgtwo,
      imgThree: poneimgthree,
      imgFour: poneumgfour,
      imgFive: poneimgfive,
    }
  ],
  projectTwo: [
    {
      imgOne: ptwoimgone,
      number: '02',
      name: 'RESTYLING',
      subtitle: 'KITCHEN/DINING AREA',
      descOne: 'The remodeling of the kitchen/dining area for employees at Studio YG represented an exciting transformation project. Initially, it was a warehouse; the space has been reinvented to offer a functional and welcoming environment for team members.',
      descTwo: 'Recognizing the importance of personal space for our employees, a dressing room with customized lockers was created.',
      descThree: 'To maximize resources and reduce waste, the decision was made to reuse existing furniture whenever possible. Through smart reconfiguration, some existing tables were retained in the outdoor area."',
    }
  ],
  projectThree: [
    {
      imgOne: pthreeimgone,
      number: '03',
      name: 'LUNA & MAR',
      subtitle: 'SPA',
      descOne: 'Strategically located in Puerto Escondido, "Luna&Mar" seamlessly blends into its surroundings. The architectural and interior design successfully merges modernity with serenity. This holistic sanctuary not only provides a wellness escape but also reflects an intrinsic connection with the surrounding nature, thus establishing a harmonious balance between contemporary design and the holistic essence of the spa.',
      descTwo: 'The color palette consists of soothing tones of blues, greens, and neutrals, inspired by the hues of the surrounding nature. These colors are incorporated into the walls and furniture selection to create an atmosphere of tranquility and harmony.',
    }
  ]

};

export default PSecOneData;