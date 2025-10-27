"use client"
import { useState, useRef } from "react"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { theme } from "@/styles/theme"
import { Hero, About } from "@/components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};

  p {
    font-family: var(--font-montserrat);
  }
`

export default function HomePage() {
  const aboutRef = useRef(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const currentTheme = isDarkMode ? theme.dark : theme.light

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Theme
      </button>
      <Main>
        <Hero onContinue={scrollToAbout} />
        <About ref={aboutRef} />
      </Main>
    </ThemeProvider>
  )
}
