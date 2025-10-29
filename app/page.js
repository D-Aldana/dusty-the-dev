"use client"
import { useState, useRef, useEffect } from "react"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { theme } from "@/styles/theme"
import { Hero, About, SkillsArsenal } from "@/components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  position: relative;
  padding: 1rem 0;
  padding-bottom: 4rem;

  p {
    font-family: var(--font-montserrat);
  }
`

export default function HomePage() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const currentTheme = isDarkMode ? theme.dark : theme.light

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Main>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
        <Hero onContinue={scrollToAbout} />
        <About ref={aboutRef} />
        <SkillsArsenal ref={skillsRef} />
      </Main>
    </ThemeProvider>
  )
}
