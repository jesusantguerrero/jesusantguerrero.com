module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {  
          DEFAULT: '#1D2C41',  
          '50': '#7E9CC5',  
          '100': '#6C8EBE',  
          '200': '#4C74AB',  
          '300': '#3C5C88',  
          '400': '#2D4464',  
          '500': '#1D2C41',  
          '600': '#0D141E',  
          '700': '#000000',  
          '800': '#000000',  
          '900': '#000000'
        },
        'accent': {
          DEFAULT: '#1E90FF',
          '50': '#FFFFFF',
          '100': '#EAF5FF',
          '200': '#B7DBFF',
          '300': '#84C2FF',
          '400': '#51A9FF',
          '500': '#1E90FF',
          '600': '#0077EA',
          '700': '#005DB7',
          '800': '#004384',
          '900': '#002951'
        },
        "dodgerblue": {
          0: '#D2E9FF', 
        100: '#A5D3FF', 
        200: '#78BCFF', 
        300: '#4BA6FF', 
        400: '#1E90FF', 
        500: '#1873CC', 
        600: '#125699', 
        700: '#0C3A66', 
        800: '#061D33'
     },
     "dodgerblue-dark": {
          0: '#1E90FF', 
        100: '#1B82E6', 
        200: '#1873CC', 
        300: '#1565B3', 
        400: '#125699', 
        500: '#0F4880', 
        600: '#0C3A66', 
        700: '#092B4C', 
        800: '#061D33', 
        900: '#030E19', 
        1000: '#000000'
     }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
