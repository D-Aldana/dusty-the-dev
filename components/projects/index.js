import { forwardRef, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ProjectCard } from "@/components/project-card"
import { breakpoints } from "@/styles/theme"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
  position: relative;

  ${breakpoints.mobile} {
    padding: 2rem 0;
  }
`

const WaveBackground = styled.div`
  position: absolute;
  top: bottom;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/wave.svg");
  background-size: 300px auto;
  background-repeat: repeat-x;
  background-position: 0% 40%;
  opacity: 0.3;
  z-index: 0;
`

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.foreground};
  text-align: center;
  letter-spacing: 0.125rem;
  ${breakpoints.mobile} {
    font-size: 2rem;
    letter-spacing: 0.075rem;
  }
`

const Subtitle = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 0.5rem;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 0.025rem;

  ${breakpoints.mobile} {
    font-size: 1rem;
    letter-spacing: 0.015rem;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;
  padding: 2rem 5rem;
  width: 100%;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    padding: 1rem 2rem;
  }
`

export const Projects = forwardRef((props, ref) => {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    gsap.fromTo(
      container,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      },
    )
  }, [ref])

  return (
    <Container ref={ref}>
      <WaveBackground />
      <Header>Featured Work</Header>
      <Subtitle>Fun stuff that I&apos;ve worked on</Subtitle>
      <ProjectGrid>
        <ProjectCard
          title="CareMobi"
          description="A platform that connects patients, families, and healthcare professionals to make managing care easier and more human"
          link={process.env.NEXT_PUBLIC_CAREMOBI_URL}
          imgSrc={`/images/caremobi.jpg`}
          skills={[
            "Next.js",
            "Django",
            "React Native",
            "Expo",
            "React",
            "PostgreSQL",
            "AWS S3",
            "Heroku",
            "Docker",
            "Firebase",
          ]}
          stats={[
            { num: "3K+", label: "Users" },
            { num: "4.9", label: "Rating" },
          ]}
          index={0}
        />
        <ProjectCard
          title="Wisdumb"
          description="A motivational quote generator that creates extremely insightful and wise quotes... or does it?"
          link={process.env.NEXT_PUBLIC_WISDUMB_URL}
          imgSrc={"/images/wisdumb.png"}
          skills={["React Native", "OpenAI API", "Expo", "Django"]}
          stats={[
            { num: "∞", label: "Quotes" },
            { num: "0", label: "Sense Made" },
          ]}
          index={1}
        />
        <ProjectCard
          title="Rock-Paper-Scissors"
          description="Don't have a friend to play rock-paper-scissors with? Play against your computer using your webcam"
          link={process.env.NEXT_PUBLIC_RPS_URL}
          imgSrc={"/images/rps.png"}
          skills={["Python", "React", "TensorFlow", "Redis"]}
          stats={[
            { num: "1", label: "Humans" },
            { num: "0", label: "Computers" },
          ]}
          index={2}
        />
      </ProjectGrid>
    </Container>
  )
})

Projects.displayName = "Projects"
