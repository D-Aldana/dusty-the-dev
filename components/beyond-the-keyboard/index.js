import { useRef, useEffect } from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import {
  FryingPanIcon,
  BoxingGlovesIcon,
  GuitarIcon,
  PawnIcon,
  MountainIcon,
  BookIcon,
} from "@/components/icons"
import { SpotlightCard } from "@/components/spotlight-card"
import { breakpoints } from "@/styles/theme"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
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

const HobbyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-top: 3rem;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const HobbyCard = styled(SpotlightCard)`
  display: flex;
  flex-direction: column;
  gap: 0.325rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`

const HobbyTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 0.5rem;
`

const HobbyDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 0.25rem;
`

export const BeyondTheKeyboard = () => {
  const containerRef = useRef(null)
  const theme = useTheme()

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <Container ref={containerRef}>
      <Header>Beyond The Keyboard</Header>
      <Subtitle>
        Hobbies and interests that keep me balanced and inspired
      </Subtitle>
      <HobbyGrid>
        <HobbyCard>
          <FryingPanIcon animate width={50} height={50} color={theme.rust} />
          <HobbyTitle>Cooking</HobbyTitle>
          <HobbyDesc>
            Trying out new dishes and techniques to challenge myself in the
            kitchen
          </HobbyDesc>
        </HobbyCard>
        <HobbyCard>
          <BoxingGlovesIcon
            animate
            width={50}
            height={50}
            color={theme.olive}
          />
          <HobbyTitle>Kickboxing</HobbyTitle>
          <HobbyDesc>
            Keeping me in shape while training amateur competition
          </HobbyDesc>
        </HobbyCard>
        <HobbyCard>
          <GuitarIcon animate width={50} height={50} color={theme.rust} />
          <HobbyTitle>Music</HobbyTitle>
          <HobbyDesc>
            Expressing myself and sharpening my skills through playing and
            composing music
          </HobbyDesc>
        </HobbyCard>
        <HobbyCard>
          <PawnIcon animate width={40} height={40} color={theme.olive} />
          <HobbyTitle>Chess</HobbyTitle>
          <HobbyDesc>
            Strategizing and improving my critical thinking one move at a time.
            <Link
              href={process.env.NEXT_PUBLIC_CHESS_URL}
              passHref
              style={{ marginLeft: "0.5rem", color: theme.accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s play!
            </Link>
          </HobbyDesc>
        </HobbyCard>
        <HobbyCard>
          <MountainIcon animate width={50} height={50} color={theme.rust} />
          <HobbyTitle>Hiking</HobbyTitle>
          <HobbyDesc>
            Exploring trails and mountains to stay active, enjoy nature, and
            recharge my mind
          </HobbyDesc>
        </HobbyCard>
        <HobbyCard>
          <BookIcon animate width={50} height={50} color={theme.olive} />
          <HobbyTitle>Reading</HobbyTitle>
          <HobbyDesc>
            Expanding my perspective through non-fiction and escaping into
            fantasy worlds for fun
          </HobbyDesc>
        </HobbyCard>
      </HobbyGrid>
    </Container>
  )
}
