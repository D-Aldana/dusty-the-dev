export const breakpoints = {
  mobile: "@media (max-width: 1024px)",
  desktop: "@media (min-width: 1024px)",
}

export const theme = {
  light: {
    primaryText: "#606C38",
    secondaryText: "#FEFAE0",
    fontSize: "16px",
    background: "#FEFAE0",
    foreground: "#283618",
    card: "#ffffff",
    cardForeground: "#283618",
    popover: "#FEFAE0",
    popoverForeground: "#283618",
    primary: "#606C38",
    primaryForeground: "#FEFAE0",
    secondary: "#DDA15E",
    secondaryForeground: "#283618",
    muted: "#f7f3d3ff",
    mutedForeground: "#717182",
    accent: "#BC6C25",
    accentForeground: "#FEFAE0",
    destructive: "#d4183d",
    destructiveForeground: "#ffffff",
    border: "#DDA15E",
    input: "transparent",
    inputBackground: "#f3f3f5",
    switchBackground: "#cbced4",
    fontWeightMedium: 500,
    fontWeightNormal: 400,
    ring: "#606C38",

    chart1: "hsl(41, 72%, 64%)", // warm gold
    chart2: "hsl(185, 55%, 55%)", // muted teal
    chart3: "hsl(227, 38%, 38%)", // slate blue
    chart4: "hsl(84, 70%, 72%)", // light green-yellow
    chart5: "hsl(70, 60%, 68%)", // olive green

    radius: "0.625rem",
    sidebar: "hsl(0, 0%, 98%)",
    sidebarForeground: "hsl(0, 0%, 15%)",
    sidebarPrimary: "#606C38",
    sidebarPrimaryForeground: "#FEFAE0",
    sidebarAccent: "hsl(0, 0%, 95%)",
    sidebarAccentForeground: "hsl(0, 0%, 20%)",
    sidebarBorder: "hsl(0, 0%, 90%)",
    sidebarRing: "#606C38",

    // Baseball theme colors
    olive: "#606C38",
    forest: "#283618",
    cream: "#FEFAE0",
    bronze: "#DDA15E",
    rust: "#BC6C25",

    // Icon colors
    github: "#f4cbb2",
    linkedin: "#0A66C2",
    instagram: "#C13584",
  },

  dark: {
    primaryText: "#FEFAE0",
    secondaryText: "#606C38",
    background: "#283618",
    foreground: "#FEFAE0",
    card: "#283618",
    cardForeground: "#FEFAE0",
    popover: "#283618",
    popoverForeground: "#FEFAE0",
    primary: "#606C38",
    primaryForeground: "#FEFAE0",
    secondary: "#DDA15E",
    secondaryForeground: "#283618",
    muted: "#39460fff",
    mutedForeground: "hsl(0, 0%, 70%)",
    accent: "#BC6C25",
    accentForeground: "#FEFAE0",
    destructive: "hsl(25, 60%, 35%)",
    destructiveForeground: "hsl(25, 75%, 70%)",
    border: "#606C38",
    input: "rgba(96, 108, 56, 0.3)",
    ring: "#606C38",
    fontWeightMedium: 500,
    fontWeightNormal: 400,

    chart1: "hsl(264, 50%, 48%)", // violet
    chart2: "hsl(162, 55%, 60%)", // turquoise
    chart3: "hsl(70, 60%, 68%)", // olive green
    chart4: "hsl(304, 60%, 55%)", // magenta
    chart5: "hsl(16, 60%, 58%)", // warm orange-red

    sidebar: "#283618",
    sidebarForeground: "#FEFAE0",
    sidebarPrimary: "#606C38",
    sidebarPrimaryForeground: "#FEFAE0",
    sidebarAccent: "hsl(0, 0%, 16%)",
    sidebarAccentForeground: "hsl(0, 0%, 98%)",
    sidebarBorder: "hsl(0, 0%, 16%)",
    sidebarRing: "#606C38",

    // Baseball theme colors (dark mode)
    olive: "#7a8a4f",
    forest: "#283618",
    cream: "#FEFAE0",
    bronze: "#DDA15E",
    rust: "#d4823e",

    // Icon colors
    github: "#f4cbb2",
    linkedin: "#0A66C2",
    instagram: "#C13584",
  },
}

export default theme
