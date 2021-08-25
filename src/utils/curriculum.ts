export const about = {
  description: '',
  image: '',
}

export const skills = {
  currently: [
    { name: '', description: '' },
  ],

  technologies: [
    { name: '', level: 1 },
  ],
}

export const portfolio = [
  {
    title: 'Zen.',
    technologies: ['javascript', 'vue.js', 'design-patterns', 'sass', 'pug'],
    description: 'It is an android calculator clone, it has order precedence and cool animations',
    image: './assets/img/calculator.png',
    link: 'https://codepen.io/freesgen/pen/JOXGrW',
    type: 'frontend',
  },

  {
    title: 'IC Payment',
    technologies: ['PHP', 'vue.js', 'AJAX', 'sass', 'MySql', 'codeigniter'],
    description: 'Management System for an ISP Company',
    image: './assets/img/home.png',
    link: 'https://ic-payment-staging.herokuapp.com',
    type: 'most proud',
  },

  {
    title: 'IC Note',
    technologies: ['javascript', 'electron', 'node.js'],
    description: 'Desktop Markdown note-taker using Electron',
    image: './assets/img/img7.png',
    link: 'https://github.com/jesusantguerrero/icnote',
    type: 'most proud',
  },
]

export const contacts = {
  message: '',
  networks: [
    { name: '', link: '' },
  ],
}

export const work = [
  {
    title: 'IC Note',
    description: '',
    link: '',
    technologies: [],
  },
]

export default {
  about,
  skills,
  portfolio,
  work,
  contacts,
}
