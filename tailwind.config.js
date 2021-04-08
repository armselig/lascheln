module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,css,scss,js,jsx,ts,tsx,vue}', './dist/**/*.html'],
  theme: {
    colors: {
      black: '#000',
      gray: '#9ca3af',
      white: '#fff',
      transparent: 'transparent',
      primary: '#c471ed',
      secondary: '#f64f59',
      tertiary: '#12c2e9',
    },
    extend: {
      animation: {
        'spin-once': 'spin 0.5s linear',
      },
    },
  },
};
