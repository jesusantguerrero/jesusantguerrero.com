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
    technologies: ['HTML', 'CSS / SCSS', 'TailwindCSS', 'Javascript', 'Vue', 'Firebase Auth', 'Firestore', 'Firebase Functions', 'Express.js'],
    description: 'Zen is a productivity app that integrates Eisenhower Matrix, Promodoros, and part of the Get Things Done (GTD) principles in a unique way, to improve your developer routine. The purpose of Zen is to help you stay in the zone.',
    image: 'https://zenboard.app/zenboard.png',
    link: 'https://zenboard.app/',
    type: 'fullstack',
  },
  {
    title: 'Sunday',
    technologies: ['HTML', 'CSS / SCSS', 'TailwindCSS', 'Javascript', 'Vue', 'PHP', 'Laravel', 'MySql', 'Docker'],
    description: 'Monolith app using laravel 8, jetstream, intertia and vue. ICDaily is a productivity web app to help you keep your tasks, track your time, using pomodoro inspired on Monday.',
    image: './assets/img/home.png',
    link: 'https://github.com/jesusantguerrero/sunday',
    type: 'most proud',
  },

  {
    title: 'IC Note',
    technologies: ['HTML', 'CSS', 'javascript', 'electron', 'node.js'],
    description: 'Desktop Markdown note-taker using Electron',
    image: './assets/img/img7.png',
    link: 'https://github.com/jesusantguerrero/icnote',
    type: 'most proud',
  },
]

export const more = [
  {
    title: 'My Digital Garden',
    technologies: [],
    description: 'This is a collection of thoughts, notes, resources and explorations I’m currently cultivating. I let myself immerse in some topics of my interest even out of tech.',
    link: '/garden',
  },
  {
    title: 'My Five Stars',
    technologies: [],
    description: 'Favorite books that have influenced in my thoughts, creativity and/or I liked a lot.',
    link: '/my-five-stars',
  },

  {
    title: 'My Playlist',
    technologies: [],
    description: 'Favorite songs I use to code, travel and to clean my house',
    link: 'my-play-list',
  },
]


export default {
  about,
  skills,
  portfolio,
  more,
}
