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
  position: relative;

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
      <Main>
        <button
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            zIndex: 1000,
            backgroundColor: "black",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle Theme
        </button>
        <Hero onContinue={scrollToAbout} />
        <About ref={aboutRef} />
      </Main>
    </ThemeProvider>
  )
}
