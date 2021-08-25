module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  theme: {
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
    }
  }
};
