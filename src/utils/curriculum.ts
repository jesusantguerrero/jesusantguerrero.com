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

interface IProject {
  title: string
  technologies: string[]
  description: string
  image: string
  link: string
  type: 'fullstack' | 'package' | 'frontend' | 'backend' | 'template'
}
export interface IProjectSection {
  title: string
  list: IProject[]
}

export const projects: Record<string, IProjectSection > = {
  laravel: {
    title: 'PHP/ Laravel Ecosystem',
    list: [
      {
        title: 'Insane Treasurer',
        technologies: ['PHP', 'Laravel', 'MySql', 'Paypal'],
        description: 'Laravel package to handle subscriptions via paypal.',
        image: '',
        link: 'https://github.com/jesusantguerrero/insane-treasurer',
        type: 'package', 
      },{
        title: 'php-querify',
        technologies: ['PHP', 'Laravel', 'MySql'],
        description: 'Php version of https://github.com/jesusantguerrero/adonisjs-querify',
        image: '',
        link: 'https://github.com/jesusantguerrero/php-querify',
        type: 'package', 
      }, {
        title: 'insane-journal',
        technologies: ['PHP', 'Laravel', 'MySql'],
        description: "Laravel package to handle accountant journals.",
        image: '',
        link: 'https://github.com/insane-code/journal',
        type: 'package',

      }
    ]
  },
  vue: {
    title: 'Vue.js Ecosystem',
    list: [{
      title: 'lumiere',
      technologies: ['Vue', 'Vuetify', 'Firebase', 'Firestore', 'Firebase Auth', 'Firebase Functions'],
      description: 'Vue.js app to manage your finances.',
      image: '',
      link: 'https://github.com/jesusantguerrero/lumiere',
      type: 'template',
    },
    {
        title: 'lumiere-utils (WIP)',
        technologies: ['Vue', 'Firebase', 'supabase'],
        description: 'Abstraction of Firebase and Supabase providers to build frontent apps with Lumiere.',
        image: '',
        link: 'https://github.com/jesusantguerrero/lumiere-utils',
        type: 'template',
    },
    {
      title: 'atmosphere-ui',
      technologies: ['Vue', 'storybook','jest','vue-testing-library'],
      description: 'Vue.js app to manage your finances.',
      image: '',
      link: '',
      type: 'template',
    }
  ]
  },
  web3: {
    title: 'Web3.js Ecosystem',
    list: [
      {
        title: 'RoosterFight',
        technologies: ['Vue', 'ethers.js', 'Ethereum', 'Solidity', 'hardhat', 'Polygon'],
        description: 'RoosterFight is an NFT game where you can claim and train a Rooster to fight and reach the top of the tournaments.',
        image: '',
        link: 'https://github.com/jesusantguerrero/chainlink-hackathon',
        type: 'fullstack',
      },
      {
        title: 'CryptoBenders',
        technologies: ['Vue', 'ethers.js', 'Polygon'],
        description: 'CryptoBenders is an NFT market place where you can buy and sell crypto assets.',
        image: '',
        link: 'https://github.com/jesusantguerrero/crypto-bender',
        type: 'frontend',
      }, {
        title: 'BendingBattle',
        technologies: ['Vue', 'ethers.js', 'Ethereum', 'Solidity', 'hardhat', 'Polygon'],
        description: 'My first Web3.0 project, card game inspired in Avatar - The Legend of Aang',
        image: '',
        link: 'https://github.com/jesusantguerrero/bending-battle',
        type: 'fullstack',
      }, 
      {
        title: 'vue-ethers',
        technologies: ['Vue', 'ethers.js', 'Moralis'],
        description: 'Vue package to interact with the Ethereum blockchain.',
        image: '',
        link: 'https://github.com/jesusantguerrero/vue-ethers',
        type: 'package',
      },
      {
        title: 'vue-dapp',
        technologies: ['Vue', 'ethers.js', 'Moralis'],
        description: 'Advanced hardhat x Vue x Moralis x Chainlink Oracles project setup',
        image: '',
        link: 'https://github.com/jesusantguerrero/vue-dapp',
        type: 'template',
      }
    ]
  },
}


export default {
  about,
  skills,
  portfolio,
  more,
}
