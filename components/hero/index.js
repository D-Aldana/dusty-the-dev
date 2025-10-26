import { useRef, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { HomePlateIcon, EnvelopeIcon } from "@/components/icons"
import { RotatingText as BaseRotatingText } from "@/components/rotating-text"
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
  color: ${({ theme }) => theme.primaryText};
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
  color: ${({ theme }) => theme.foreground};

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
  font-weight: 500;
  max-width: 44rem;
  text-align: center;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.primaryText};

  ${breakpoints.mobile} {
    font-size: 1.125rem;
  }
`

const RotatingTextWrapper = styled(BaseRotatingText)`
  display: inline-block;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
  vertical-align: baseline;
  width: 7ch;
`

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.olive};
  padding: 0.5rem 2rem;
  background-color: ${(props) =>
    props.primary ? props.theme.olive : "transparent"};
  color: ${(props) => (props.primary ? props.theme.cream : props.theme.olive)};
  cursor: pointer;
  box-shadow: 4px 8px 6px rgba(0, 0, 0, 0.3);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary ? props.theme.forest : props.theme.muted};
    color: ${(props) => props.theme.cream};
    transition: background-color 0.3s ease color 0.3s ease;
  }

  &:active {
    transform: translateY(2px);
  }

  svg {
    transform: translateY(-0.09rem);
  }
`

const ButtonText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`

export const Hero = () => {
  const theme = useTheme()
  const [envOpen, setEnvOpen] = useState(false)
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
      { drawSVG: "0% 40%" },
      {
        drawSVG: "100% 140%",
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
      plateRef?.current?.removeEventListener("mouseenter", handleMouseEnter)
      plateRef?.current?.removeEventListener("mouseleave", handleMouseLeave)
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
          Creating digital{" "}
          <RotatingTextWrapper
            texts={["solutions", "products", "odysseys"]}
            splitBy="characters"
            staggerFrom={"last"}
            initial={{ y: "-120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
          with a mix of logic, art, and a love for building cool stuff. Welcome
          to my corner of the web.
        </Caption>
        <CTAContainer>
          <Button
            primary
            onMouseEnter={() => setEnvOpen(true)}
            onMouseLeave={() => setEnvOpen(false)}
          >
            <EnvelopeIcon width={20} height={20} open={envOpen} />
            <ButtonText>Get in Touch</ButtonText>
          </Button>
          <Button>
            <ButtonText>View Projects</ButtonText>
          </Button>
        </CTAContainer>
      </HeroContainer>
    </Container>
  )
}
