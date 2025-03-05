module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
          animation: {
            'gradient': 'gradient 30s linear infinite',
          },
          keyframes: {
            'gradient': {
              to: { 'background-position': '200% center' },
            }
          },                  
        },
      },
}