module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
          animation: {
            'gradient': 'gradient 30s linear infinite',
            'rotate-diagonal': 'rotateDiagonal 10s infinite linear',
          },
          keyframes: {
            'gradient': {
              to: { 'background-position': '200% center' },
            },
            'rotateDiagonal': {
              '0%': { transform: 'rotate(0deg) translate(20px, -20px)' }, 
              '100%': { transform: 'rotate(360deg) translate(20px, -20px)' },
            },
          
          },                  
        },
      },
}