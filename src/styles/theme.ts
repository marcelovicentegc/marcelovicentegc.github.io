const sharedTheme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  space: [0, 8, 16, 32, 64, 128],
}

export const theme = {
  light: {
    ...sharedTheme,
    colors: {
      theme: "light",
      primary: "#e7e2e2",
      secondary: "#121212",
      link: "#2b32fd",
      syntax: {
        background: "#e1d7d7",
        text: "#394244",
      },
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      theme: "dark",
      primary: "#121212",
      secondary: "#e7e2e2",
      link: "#2b32fd",
      syntax: {
        background: "#1e1e1e",
        text: "#6f8186",
      },
    },
  },
}

export type ThemeMode = "light" | "dark"
export type Theme = typeof theme
