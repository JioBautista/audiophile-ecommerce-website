/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tx,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-tblt": "url('src/assets/home/tablet/image-header.jpg')",
        "hero-pattern-mbl": "url('src/assets/home/mobile/image-header.jpg')",
        "hero-pattern-dsktp": "url('src/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
