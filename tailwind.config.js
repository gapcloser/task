module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
        monton: ["Monoton", "cursive"],
      },
      height: {
        xxl: "30rem",
      },
      minWidth: {
        10: "2.5rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#F7F8FA",
        violet: "#8833FF",
        danger: "#FF6633",
        green: "#33E6CA",
        blue: "#29BBFF",
      }),
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
