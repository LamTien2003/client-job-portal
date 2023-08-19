/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],

    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                bannerHome: "url('https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/h1-hero-bg.png')",
            },

            colors: {
                primary: {
                    ['blur']: 'rgba(0,167,172,.3)',
                    100: '#00A7AC',
                    70: '#9ceaec',
                    40: '#b6ebec66',

                    10: 'rgba(0,167,172,.1)',
                },
                content: {
                    ['text']: '#595959',
                    ['title']: '#061421',
                    ['bg']: '#f8f8f8',
                    ['bgjob']: '#fdf9f9',
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
                footer: {
                    ['text']: '#b3b3b3',
                    ['bg']: '#1A1A1A',
                    ['color-hover']: '#009FAC',
                    ['color-boder']: 'rgba(255,255,255,.1)',
                },
                menu:{
                    ['bg']: '#061421',
                },
                linehr:{
                    ['boder']: 'rgba(0,167,172,.1607843137)',
                }
            },
            width: {
                13: '3.25rem', // 52px
                15: '3.75rem', // 60px
                18: '4.5rem', // 72px
                22: '5.5rem', // 88px
                22.5: '5.625rem', // 90px
            },
            height: {
                13: '3.25rem', // 52px
                15: '3.75rem', // 60px
                18: '4.5rem', // 72px
                22: '5.5rem', // 88px
                22.5: '5.625rem', // 90px
            },
            fontSize: {
                cb: '0.9375rem', // 15px
            },
            spacing: {
                1.25: '0.3125rem', // 5px
                1.75: '0.4375rem', // 7px
                2.25: '0.5625rem', // 5px
                6.5: '1.625rem', // 26px
                7.5: '1.875rem', // 30px
                10.5: '2.625rem', // 42x
                11.25: '2.8125rem', // 45x
                17.5: '4.375rem', // 70px
                25: '6.25rem', // 100px
            },
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

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            tb: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            mb: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [require('tailwind-scrollbar')],
});
