import { useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import Aurora from "@/components/aurora"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { HomePlateIcon } from "@/components/icons"
import { breakpoints } from "@/styles/theme"

gsap.registerPlugin(DrawSVGPlugin)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.cream} 0%,
    ${({ theme }) => theme.background} 50%
  );
  color: ${({ theme }) => theme.foreground};
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  margin: 0 4.5rem;
  width: 100%;
  gap: 1.25rem;

  ${breakpoints.mobile} {
    margin: 0;
  }
`

const FlippedIconWrapper = styled.div`
  transform: scaleY(-1);
  cursor: pointer;
  margin-bottom: 0.25rem;
`

const Name = styled.h1`
  font-size: 4rem;
  text-align: center;

  ${breakpoints.mobile} {
    font-size: 2.5rem;
  }
`

const StickerContainer = styled.div`
  display: inline-block;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.olive},
    ${({ theme }) => theme.forest}
  );
  padding: 0.75rem 2rem;
  margin-bottom: 1.5rem;
  transform: rotate(-1deg);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border: none;
  color: ${({ theme }) => theme.cream};
  cursor: pointer;
`

const StickerText = styled.p`
  font-family: var(--font-bebas) !important;
  font-size: 1.85rem;
  letter-spacing: 0.125rem;

  ${breakpoints.mobile} {
    font-size: 1.5rem;
  }
`

const Caption = styled.p`
  font-size: 1.25rem;
  max-width: 44rem;
  text-align: center;
  padding: 0 1.5rem;

  ${breakpoints.mobile} {
    font-size: 1.125rem;
  }
`

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Hero = () => {
  const plateRef = useRef(null)

  const plateTimeline = gsap.timeline({ defaults: { ease: "power2.inOut" } })
  const onClickPlate = () => {
    plateTimeline.to(plateRef.current, { rotationY: "+=720", duration: 0.75 })
  }

  useEffect(() => {
    if (!plateRef.current) return

    const paths = plateRef.current.querySelectorAll("path")
    gsap.fromTo(
      paths,
      { drawSVG: "0% 20%" },
      {
        drawSVG: "100% 120%",
        duration: 2,
        ease: "linear",
        repeat: -1,
      },
    )

    const handleMouseEnter = () => {
      gsap.to(plateRef.current, {
        scale: 1.25,
        duration: 0.75,
        ease: "power2.out",
      })
    }
    const handleMouseLeave = () => {
      gsap.to(plateRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    plateRef.current.addEventListener("mouseenter", handleMouseEnter)
    plateRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      plateRef.current.removeEventListener("mouseenter", handleMouseEnter)
      plateRef.current.removeEventListener("mouseleave", handleMouseLeave)
      if (spinTween) spinTween.kill()
    }
  }, [])

  return (
    <Container>
      <HeroContainer>
        <FlippedIconWrapper onClick={onClickPlate}>
          <HomePlateIcon ref={plateRef} width={100} height={100} />
        </FlippedIconWrapper>
        <Name>Dustin Aldana</Name>
        <StickerContainer>
          <StickerText>FULL-STACK DEVELOPER</StickerText>
        </StickerContainer>
        <Caption>
          Creating digital experiences with a mix of logic, art, and a love for
          building cool stuff. Welcome to my corner of the web.
        </Caption>
        <CTAContainer></CTAContainer>
      </HeroContainer>
    </Container>
  )
}
