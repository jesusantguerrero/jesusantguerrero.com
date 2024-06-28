import icLoanDashboard from "../assets/icloan-dashboard.png";

interface IProject {
  title: string
  technologies: string[]
  description: string
  imageUrl?: string
  link: string
  pinned?: boolean
  type: 'fullstack' | 'package' | 'frontend' | 'backend' | 'template'
}


export interface IProjectSection {
  title: string
  list: IProject[]
}


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

export const portfolio: IProject[] = [
 
  {
    title: 'Zen.',
    technologies: ['HTML', 'CSS / SCSS', 'TailwindCSS', 'Javascript', 'Vue', 'Firebase Auth', 'Firestore', 'Firebase Functions', 'Express.js'],
    description: 'Zen is a productivity app that integrates Eisenhower Matrix with The Pomodoro Technique.',
    imageUrl: 'https://private-user-images.githubusercontent.com/17421742/337866170-010d776a-2cc5-469e-ae52-92d3180f8ac4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk1ODg2MTcsIm5iZiI6MTcxOTU4ODMxNywicGF0aCI6Ii8xNzQyMTc0Mi8zMzc4NjYxNzAtMDEwZDc3NmEtMmNjNS00NjllLWFlNTItOTJkMzE4MGY4YWM0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI4VDE1MjUxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIyODg3N2VkYjUxNzI2NTVhMDMwMzc0MmZlNmFkN2FiMWE1NzY1ZDdhZDY3YjVhNGQxNmY5NGE3ZmMxYmZhYzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DBqMTojl8bGLqsPIbjCt5DYst8tv3fxChix_naqUlyk',
    link: 'https://zenboard.app/',
    type: 'fullstack',
  },
  {
    title: 'ICLoan',
    technologies: ['HTML', 'CSS / SCSS', 'TailwindCSS', 'Javascript', 'Vue', 'PHP', 'Laravel', 'MySql', 'Docker'],
    description: 'Loan & Property Management Software that can handle properties with multiple units, owner distribution, rental contracts and rental expenses along with loan with rates.',
    imageUrl: icLoanDashboard.src,
    link: 'https://github.com/jesusantguerrero/prestapp',
    pinned: true,
    type: 'fullstack'
  },
  {
    title: 'Sunday',
    technologies: ['HTML', 'CSS / SCSS', 'TailwindCSS', 'Javascript', 'Vue', 'PHP', 'Laravel', 'MySql', 'Docker'],
    description: 'IC Daily is a multi purpose productivity inspired on Monday.',
    imageUrl: 'https://raw.githubusercontent.com/jesusantguerrero/sunday/master/resources/js/documentation/assets/images/img2.png',
    link: 'https://github.com/jesusantguerrero/sunday',
    pinned: true,
    type: 'fullstack'
  },
  {
    title: 'NeatCoach',
    technologies: ['Vue', 'vitest', 'cloudflare', 'ai', 'TailwindCSS'],
    description: "NeatCoach is a smart running coach. It will take a distance and minutes and Build well structured a training plan to run the entered distance in the desired minutes by the end of the last week of the training plan.",
    imageUrl: '',
    link: 'https://github.com/jesusantguerrero/running-coach',
    type: 'fullstack',
    pinned: true
  },
  {
    title: 'Atmosphere-ui',
    technologies: ['Vue', 'vitest', 'storybook', 'TailwindCSS'],
    description: "A set of components for my laravel's jetstream-inertia projects",
    imageUrl: '',
    link: 'https://github.com/jesusantguerrero/atmosphere-ui',
    type: 'package',
    pinned: false
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
    link: '/play-list',
  },
  {
    title: 'Bookmarks',
    technologies: [],
    description: 'Notes & Dev Bookmarks',
    link: '/notes',
  },
]


export const projects: Record<string, IProjectSection > = {
  laravel: {
    title: 'PHP/ Laravel Ecosystem',
    list: [
      {
        title: 'Insane Treasurer',
        technologies: ['PHP', 'Laravel', 'MySql', 'Paypal'],
        description: 'Laravel package to handle subscriptions via paypal.',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/insane-treasurer',
        type: 'package', 
      },{
        title: 'php-querify',
        technologies: ['PHP', 'Laravel', 'MySql'],
        description: 'Php version of https://github.com/jesusantguerrero/adonisjs-querify',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/php-querify',
        type: 'package', 
      }, {
        title: 'insane-journal',
        technologies: ['PHP', 'Laravel', 'MySql'],
        description: "Laravel package to handle accountant journals.",
        imageUrl: '',
        link: 'https://github.com/insane-code/journal',
        type: 'package',
      },
      ...portfolio.filter(project => project.technologies.includes('Laravel')).map(project => ({
        ...project,
        imageUrl: ''
      }))
    ]
  },
  vue: {
    title: 'Vue.js Ecosystem',
    list: [{
      title: 'lumiere',
      technologies: ['Vue', 'Vuetify', 'Firebase', 'Firestore', 'Firebase Auth', 'Firebase Functions'],
      description: 'Vue.js app to manage your finances.',
      imageUrl: '',
      link: 'https://github.com/jesusantguerrero/lumiere',
      type: 'template',
    },
    {
        title: 'lumiere-utils (WIP)',
        technologies: ['Vue', 'Firebase', 'supabase'],
        description: 'Abstraction of Firebase and Supabase providers to build frontent apps with Lumiere.',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/lumiere-utils',
        type: 'template',
    },
    ...portfolio.filter(project => project.technologies.includes('Vue') && !project.technologies.includes('Laravel') ).map(project => ({
      ...project,
      imageUrl: ''
    }))
  ]
  },
  web3: {
    title: 'Web3.js Ecosystem',
    list: [
      {
        title: 'RoosterFight',
        technologies: ['Vue', 'ethers.js', 'Ethereum', 'Solidity', 'hardhat', 'Polygon'],
        description: 'RoosterFight is an NFT game where you can claim and train a Rooster to fight and reach the top of the tournaments.',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/chainlink-hackathon',
        type: 'fullstack',
      },
      {
        title: 'CryptoBenders',
        technologies: ['Vue', 'ethers.js', 'Polygon'],
        description: 'CryptoBenders is an NFT market place where you can buy and sell crypto assets.',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/crypto-bender',
        type: 'frontend',
      }, {
        title: 'BendingBattle',
        technologies: ['Vue', 'ethers.js', 'Ethereum', 'Solidity', 'hardhat', 'Polygon'],
        description: 'My first Web3.0 project, card game inspired in Avatar - The Legend of Aang',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/bending-battle',
        type: 'fullstack',
      }, 
      {
        title: 'vue-ethers',
        technologies: ['Vue', 'ethers.js', 'Moralis'],
        description: 'Vue package to interact with the Ethereum blockchain.',
        imageUrl: '',
        link: 'https://github.com/jesusantguerrero/vue-ethers',
        type: 'package',
      },
      {
        title: 'vue-dapp',
        technologies: ['Vue', 'ethers.js', 'Moralis'],
        description: 'Advanced hardhat x Vue x Moralis x Chainlink Oracles project setup',
        imageUrl: '',
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
