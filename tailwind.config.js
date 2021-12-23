module.exports = {
  content: ['./src/**/*.{html,js,json}', './*.{html,js,json}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        light_red_work: 'hsl(15, 100%, 70%)',
        soft_blue: 'hsl(195, 74%, 62%)',
        light_red_study: 'hsl(348, 100%, 68%)',
        lime_green: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        soft_orange: 'hsl(43, 84%, 65%)',
        very_dark_blue: 'hsl(226, 43%, 10%)',
        dark_blue: 'hsl(235, 46%, 20%)',
        desaturated_blue: 'hsl(235, 45%, 61%)',
        pale_blue: 'hsl(236, 100%, 87%)',
        hover_blue: '#383e94',
      },
      borderWidth: {
        3: '3px',
      },
      spacing: {
        18: '4.5rem',
        86: '21rem',
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
  plugins: [],
};
