/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            screens: {
                'xsm': '280px',

                'sm': '640px', // => @media (min-width: 640px) { ... }

                'md': '768px', // => @media (min-width: 768px) { ... }

                'lg': '1024px', // => @media (min-width: 1024px) { ... }

                'xl': '1280px', // => @media (min-width: 1280px) { ... }

                '2xl': '1536px', // => @media (min-width: 1536px) { ... }
            }
        }, keyframes: {
            pulse: {
                '0%, 100%': {
                    opacity: 1, backgroundColor: 'linear-gradient(90deg, #ccd3d4,#a7adad,#828687)'
                }, '50%': {
                    opacity: 0.5, backgroundColor: 'linear-gradient(90deg,#828687, #a7adad,#ccd3d4)'
                }
            }
        }
    }, plugins: [],
}