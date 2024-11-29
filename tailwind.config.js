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
                NeoDunggeunmo: ['NeoDunggeunmo', 'sans-serif'], // 커스텀 폰트 추가
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
};
