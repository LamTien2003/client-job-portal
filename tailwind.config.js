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
                },
                blur: {
                    100: 'rgba(0,0,0,.6)',
                },
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

            tablet: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            mobile: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};
