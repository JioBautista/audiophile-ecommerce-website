/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tx,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-tblt": "url('/src/assets/home/tablet/image-header.jpg')",
        "hero-pattern-mbl": "url('/src/assets/home/mobile/image-header.jpg')",
        "hero-pattern-dsktp": "url('/src/assets/home/desktop/image-hero.jpg')",
        "zx9-bg-pattern": "url('/src/assets/home/desktop/pattern-circles.svg')",
        "zx7-pattern-mbl":
          "url('/src/assets/home/mobile/image-speaker-zx7.jpg')",
        "zx7-pattern-tblt":
          "url('/src/assets/home/tablet/image-speaker-zx7.jpg')",
        "zx7-pattern-dsktp":
          "url('/src/assets/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
