module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trap': ['Trap-Bold','Trap-ExtraBold','Trap-Light','Trap-Medium','Trap-Regular','Trap-SemiBold'],
        'trap-black': ['Trap-Black']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
