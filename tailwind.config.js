/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            mawWidth: {
                DEFAULT: '1340px',
            },
            px: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '4rem',
                lg: '6rem',
                xl: '8rem',
            },
        },
        extend: {
            fontFamily: {
                NeoDunggeunmo: ['NeoDunggeunmo', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'custom-blue': {
                    100: '#F2F9FF',
                    200: '#EAF3FD',
                },
                cyan: {
                    50: '#E6FFFA',
                    600: '#00A3C4',
                },
                'custom-deepsea': {
                    500: '#04B2D9',
                    600: '#049DD9',
                },
            },
        },
    },
    plugins: [],
};
