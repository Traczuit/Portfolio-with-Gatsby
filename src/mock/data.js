import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mauricio Tracz',
  subtitle: 'Fullstack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'foto.jpg',
  paragraphOne: 'Soy un joven desarrollador fullstack buscando brillar en este rubro. Cuento con conocimientos en HTML5, CSS3, Javascript (vanilla y React.js), Node.js, Express y sistemas de gestión de bases de datos como MySQL y PostgreSQL.',
  paragraphTwo: 'Anteriormente trabajé con DLR Software, Reanswer y en un par de proyectos como freelance; me capacité como diseñador responsive en FreeCodeCamp, y como desarrollador fullstack en Acámica',
  paragraphThree: ' ',
  resume: /*'https://www.resumemaker.online/es.php'*/ '' , // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'logo.png',
    title: 'Ghibli Web App',
    info: 'Una aplicación web que utiliza The Studio Ghibli API (https://ghibliapi.herokuapp.com) para mostrar todos los títulos de Studio Ghibli con sus sinopsis.',
    info2: '',
    url: 'https://traczuit.github.io/Ghibli-WebApp/',
    repo: /* 'https://github.com/cobidev/react-simplefolio' */ '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '¡Sería un gusto trabajar con ustedes!',
  btn: 'Hablemos',
  email: 'traczm93@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mauriciotracz',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mauriciotracz/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Traczuit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
