"use client"
import { useState, useRef, useEffect } from "react"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { theme } from "@/styles/theme"
import { Hero, About, SkillsArsenal, Projects, Timeline } from "@/components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  position: relative;
  // padding: 1rem 0;
  padding-bottom: 8rem;
  position: relative;

  p {
    font-family: var(--font-montserrat);
  }
`

export default function HomePage() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const timelineRef = useRef(null)
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

  const scrollToProjects = () => {
    if (projectsRef) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Main>
        <button
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000,
            backgroundColor: currentTheme.bronze,
          }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle Theme
        </button>
        <Hero onContinue={scrollToAbout} onClickProjects={scrollToProjects} />
        <About ref={aboutRef} />
        <SkillsArsenal ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Timeline ref={timelineRef} />
      </Main>
    </ThemeProvider>
  )
}
