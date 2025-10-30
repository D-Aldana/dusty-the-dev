import { forwardRef, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "@emotion/styled"
import { gsap } from "gsap"

const FlipCard = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 350px;
  height: 400px;
`

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2.5px solid ${({ theme }) => theme.olive};
  border-radius: 0.5rem;
  overflow: hidden;
`

const CardFront = styled(CardFace)`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const CardBack = styled(CardFace)`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.bronze},
    ${({ theme }) => theme.rust}
  );
  color: ${({ theme }) => theme.cream};
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  padding: 1.5rem;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  height: 100%;
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  img {
    opacity: 0.635;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    mix-blend-mode: multiply;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.cream};
  margin-bottom: 0.5rem;
  margin-left: ${({ back }) => (back ? "0" : "0.75rem")};
  z-index: 1;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
`

const DescriptionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 0.5rem;
`

const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const SkillPill = styled.span`
  background-color: ${({ theme, back }) =>
    back ? `${theme.forest}90` : `${theme.bronze}40`};
  border: 0.5px solid ${({ theme }) => theme.bronze}70;
  color: ${({ theme, back }) => (back ? theme.cream : theme.bronze)};
  padding: 0 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 0.75rem 0;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => `${theme.cream}20`};
  border: 1px solid ${({ theme }) => `${theme.cream}40`};
  border-radius: 0.5rem;
  padding: 0.75rem;
`

const StatNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.forest};
`

const StatLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.cream};
  margin-top: 0.25rem;
`

const TechText = styled.p`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.cream};
`

const LinkText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.cream};
  text-decoration: ${({ noLink }) => (noLink ? "none" : "underline")};
  margin-top: ${({ noLink }) => (noLink ? "auto" : "1rem")};
  text-align: center;
`

export const ProjectCard = forwardRef(
  (
    { title, description, link = null, imgSrc = null, skills = [], stats = [] },
    ref,
  ) => {
    const innerRef = useRef(null)
    const [flipped, setFlipped] = useState(false)

    const handleMouseEnter = () => {
      gsap.killTweensOf(innerRef.current)
      const tl = gsap.timeline()

      tl.to(innerRef.current, {
        rotationY: 195,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(innerRef.current, {
          rotationY: 165,
          duration: 0.2,
          ease: "power0",
        })
        .to(innerRef.current, {
          rotationY: 180,
          duration: 0.5,
          ease: "power0",
        })
    }

    const handleMouseLeave = () => {
      gsap.killTweensOf(innerRef.current)
      const tl = gsap.timeline()

      tl.to(innerRef.current, {
        rotationY: -15,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(innerRef.current, {
          rotationY: 15,
          duration: 0.2,
          ease: "power0",
        })
        .to(innerRef.current, {
          rotationY: 0,
          duration: 0.5,
          ease: "power0.out",
        })
    }

    const handleTap = () => {
      setFlipped((prev) => !prev)
      gsap.killTweensOf(innerRef.current)
      gsap.to(innerRef.current, {
        rotationY: flipped ? 0 : 180,
        duration: 0.8,
        ease: "power2.out",
      })
      gsap.to(innerRef.current, {
        rotationY: flipped ? 0 : 180,
        duration: 0.5,
        ease: "elastic.out(1,0.3)",
        delay: 0.8,
      })
    }

    return (
      <FlipCard
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTap}
      >
        <FlipInner ref={innerRef}>
          <CardFront>
            <ImageContainer>
              <ImageWrapper>
                {imgSrc && <Image src={imgSrc} fill alt={title} />}
              </ImageWrapper>
              <Title>{title}</Title>
            </ImageContainer>
            <DescriptionContainer>
              <DescriptionText>{description}</DescriptionText>
              <SkillsList>
                {skills.slice(0, 3).map((skill, idx) => (
                  <SkillPill key={idx}>{skill}</SkillPill>
                ))}
                {skills.length > 3 && (
                  <SkillPill>+{skills.length - 3}</SkillPill>
                )}
              </SkillsList>
            </DescriptionContainer>
          </CardFront>

          <CardBack>
            <Title back>{title}</Title>
            <StatsContainer>
              {stats.map((stat, idx) => (
                <Stat key={idx}>
                  <StatNumber>{stat.num}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </Stat>
              ))}
            </StatsContainer>
            <TechText>Technologies</TechText>
            <SkillsList>
              {skills.map((skill, idx) => (
                <SkillPill back key={idx}>
                  {skill}
                </SkillPill>
              ))}
            </SkillsList>

            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "auto", textAlign: "center" }}
              >
                <LinkText>Learn more &rarr;</LinkText>
              </Link>
            ) : (
              <LinkText noLink>Coming soon...</LinkText>
            )}
          </CardBack>
        </FlipInner>
      </FlipCard>
    )
  },
)

ProjectCard.displayName = "ProjectCard"
