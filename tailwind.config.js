module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lime: 'hsl(61, 70%, 52%)',
                red: 'hsl(4, 69%, 50%)',
                slate100: 'hsl(202, 86%, 94%)',
                slate300: 'hsl(203, 41%, 72%)',
                slate500: 'hsl(200, 26%, 54%)',
                slate700: 'hsl(200, 24%, 40%)',
                slate900: 'hsl(202, 55%, 16%)',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}