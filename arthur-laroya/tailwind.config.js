module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular': ['CircularStd-Book'],
        'circular-black': ['CircularStd-Black']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
