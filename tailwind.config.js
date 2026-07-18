/** Config espelha o que estava inline no index.html (era usado pelo CDN do Tailwind). */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        orange:  '#E8A020',
        orangeh: '#F5B835',
        bg:      '#2D2D2D',
        bg2:     '#383838',
        steel:   '#5C8A9A',
        steelh:  '#4A7282',
        teal:    '#5AAA8A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
};
