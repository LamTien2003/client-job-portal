/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    ['blur']: 'rgba(0,167,172,.25)',
                    100: '#00A7AC',
                },
                content: {
                    ['text']: '#595959',
                    ['title']: '#061421',
                    ['bg']: '#f8f8f8',
                    ['bgsave']: '#eff3f2',
                    ['border']: '#eee',
                    ['bg-full-time']: '#f3e8c1',
                    ['bg-part-time']: '#915bfe2e',
                    ['bg-remote']: '#b4f2ee',
                    ['link']: '#0279cf',
                },
                blur: {
                    100: 'rgba(0,0,0,.6)',
                },
            },
            width: {
                '13': '3.25rem', // 52px
                '18': '4.5rem', // 72px
            },
            fontSize: {
                'cb': '0.9375rem', // 15px
            },
            spacing: {
                '1.25': '0.3125rem', // 5px
                '10.5': '2.625rem', // 42x
                '6.5': '1.625rem', // 26px
                '7.5': '1.875rem', // 30px
                '17.5': '4.375rem', // 70px
                '25': '6.25rem', // 100px
                
            }
        },
        keyframes: {
            wiggle: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0)' },
            },
        },
        screens: {
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

      keyframes: {
            wiggle: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0)' },
            },
      },
      screens: {
          xl: { max: '1279px' },
          // => @media (max-width: 1279px) { ... }

          lg: { max: '1023px' },
          // => @media (max-width: 1023px) { ... }

          tb: { max: '767px' },
          // => @media (max-width: 767px) { ... }

          mb: { max: '639px' },
          // => @media (max-width: 639px) { ... }
      },
        },
    },
    plugins: [],
};
