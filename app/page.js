"use client"
import { useState } from "react"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { theme } from "@/styles/theme"
import { Hero } from "@/components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100svh;
  background-color: ${(props) => props.theme.background};

  p {
    font-family: var(--font-montserrat);
  }
`

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const currentTheme = isDarkMode ? theme.dark : theme.light

  return (
    <ThemeProvider theme={currentTheme}>
      <Main>
        <Hero />
      </Main>
    </ThemeProvider>
  )
}
