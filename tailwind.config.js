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
                },
                blur: {
                    100: 'rgba(0,0,0,.6)',
                },
            },
            width: {
                '13': '3.25rem',
            },
            fontSize: {
                'small': '0.875rem',
                'cb': '0.9375rem',
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
