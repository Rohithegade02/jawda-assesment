/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["InterRegular", "sans-serif"],       // Regular (400)
        InterBold: ["InterBold", "sans-serif"],      // Bold (700)
        InterExtraBold: ["InterExtraBold", "sans-serif"], // Extra Bold (800)
        InterExtraLight: ["InterExtraLight", "sans-serif"], // Extra Light (200)
        InterLight: ["InterLight", "sans-serif"],    // Light (300)
        InterMedium: ["InterMedium", "sans-serif"],  // Medium (500)
        InterSemiBold: ["InterSemiBold", "sans-serif"], // Semi-Bold (600)
        InterThin: ["InterThin", "sans-serif"],      // Thin (100)
        InterBlack: ["InterBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
}
