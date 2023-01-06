module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                text: '#162427',
                primary: '#001EB9',
                secondary: '#969191',
                background: '#F7F7F7',
            },
        },
        fontFamily: {
            sans: ['Satoshi', 'sans-serif']
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
