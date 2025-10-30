import { forwardRef, useRef, useEffect } from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { breakpoints } from "@/styles/theme"
import { Base } from "@/components/base"
import { SpotlightCard } from "@/components/spotlight-card"
import { ImageFolder } from "@/components/image-folder"
import { BeyondTheKeyboard } from "@/components/beyond-the-keyboard"
import { MyStory as myStoryContent } from "@/util/consts"

gsap.registerPlugin(ScrollTrigger)

const WaveBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.3;

  background-image:
    url("/images/wave.svg"), url("/images/wave.svg"), url("/images/wave.svg"),
    url("/images/wave.svg");

  background-repeat: repeat-x, repeat-x, repeat-x, repeat-x;

  background-size:
    300px auto,
    350px auto,
    300px auto,
    350px auto;

  background-position:
    0% 5%,
    0% 30%,
    0% 55%,
    0% 75%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1.5rem;
  gap: 1rem;
  position: relative;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  width: 100%;
`

const StickerContainer = styled.div`
  display: inline-block;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.bronze},
    ${({ theme }) => theme.rust}
  );
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  transform: rotate(2deg);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border: none;
  color: ${({ theme }) => theme.cream};
`

const StickerText = styled.h2`
  font-size: 3.25rem;
  font-weight: 600;
  letter-spacing: 0.15rem;

  ${breakpoints.mobile} {
    font-size: 2.25rem;
    letter-spacing: 0.1rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 1.25rem;
  text-align: center;
`

const ContentGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  column-gap: 3rem;
  row-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;

  grid-template-rows: repeat(7, 1fr);

  color: ${({ theme }) => theme.primaryText};

  grid-template-areas:
    "photo myStory"
    "photo myStory"
    "photo myStory"
    "photo myStory"
    "photo myStory"
    "photo myStory"
    "photo funFacts"
    "stats funFacts"
    "stats funFacts";

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "photo"
      "myStory"
      "stats"
      "funFacts";
    height: auto;
    padding: 0.25rem;
  }
`

const ImageContainer = styled.div`
  grid-area: photo;
  width: 100%;
  height: 650px;
  position: relative;
  border-radius: 1.5rem;
  padding: 5px;
  background: radial-gradient(
    circle at top left,
    ${({ theme }) => theme.olive},
    ${({ theme }) => theme.rust}
  );

  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.35);
  position: relative;
  z-index: 1;
`

const GradientBar = styled.div`
  width: 3rem;
  height: 0.25rem;
  border-radius: 9999px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.rust},
    ${({ theme }) => theme.bronze}
  );
`

const CardTitle = styled.h3`
  font-size: ${(props) => (props.small ? "1.25rem" : "1.5rem")};
  font-weight: 700;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const MyStory = styled(SpotlightCard)`
  grid-area: myStory;
  border-radius: 1.5rem;
  border: 2px solid ${({ theme }) => theme.olive};
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  background: transparent;
`

const StoryText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75;
  color: ${({ theme }) => theme.primaryText};
`

const StatsContainer = styled(SpotlightCard)`
  grid-area: stats;
  background: radial-gradient(
    circle at bottom left,
    ${({ theme }) => theme.olive},
    ${({ theme }) => theme.rust}
  );
  border: 4px solid ${({ theme }) => theme.olive};
  border-radius: 1.5rem;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  color: ${({ theme }) => theme.cream};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.muted};
  opacity: 0.5;
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`

const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.bronze};
`

const StatDesc = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.primaryText};
`

const FunFacts = styled(SpotlightCard)`
  grid-area: funFacts;
  border-radius: 1.5rem;
  border: 2px solid ${({ theme }) => theme.olive};
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
`

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.75rem;
  flex: 1;
`

const FactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.muted};
  height: 100%;
  padding: 0.75rem;
`

const FactText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`

const FolderContainer = styled(ImageFolder)`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  z-index: 2;

  ${breakpoints.mobile} {
    right: 1.5rem;
  }
`

export const About = forwardRef((props, ref) => {
  const theme = useTheme()

  const baseRef = useRef(null)
  const headerRef = useRef(null)
  const photoRef = useRef(null)
  const statsRef = useRef(null)
  const storyRef = useRef(null)
  const factsRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1024px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions

        if (baseRef.current) {
          gsap.from(baseRef.current, {
            x: isDesktop ? 50 : 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: baseRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }

        if (headerRef.current) {
          gsap.from(headerRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }

        if (photoRef.current) {
          gsap.from(photoRef.current, {
            x: isDesktop ? -100 : 0,
            y: isDesktop ? 0 : 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photoRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }

        if (storyRef.current) {
          gsap.from(storyRef.current, {
            x: isDesktop ? 100 : 0,
            y: isDesktop ? 0 : 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }

        if (statsRef.current) {
          gsap.from(statsRef.current, {
            y: isDesktop ? 0 : 20,
            x: isDesktop ? -100 : 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }

        if (factsRef.current) {
          gsap.from(factsRef.current, {
            y: isDesktop ? 0 : 20,
            x: isDesktop ? 100 : 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: factsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }
      },
    )

    return () => mm.revert() // cleanup
  }, [])

  return (
    <Container ref={ref}>
      <WaveBackground />
      <Base title="1ST" ref={baseRef} />
      <Header ref={headerRef}>
        <StickerContainer>
          <StickerText>About Me</StickerText>
        </StickerContainer>
        <Subtitle>
          Beyond the code: who am I when I&apos;m not building applications
        </Subtitle>
      </Header>
      <ContentGrid>
        <ImageContainer ref={photoRef}>
          <Image
            src="/images/hiking.jpg"
            alt="Dustin's Picture"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              padding: "5px",
              borderRadius: "1.5rem",
            }}
          />
          <FolderContainer
            color={theme.rust}
            size={1}
            items={[
              "/images/europe.jpg",
              "/images/baseball.jpg",
              "/images/headshot.jpg",
            ]}
            title="dustin.zip"
          />
        </ImageContainer>
        <MyStory ref={storyRef}>
          <CardHeader>
            <GradientBar />
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <StoryText>{myStoryContent.content}</StoryText>
        </MyStory>

        <StatsContainer ref={statsRef}>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <StatsGrid>
            <Stat>
              <StatNumber>4+</StatNumber>
              <StatDesc>Years of coding 💻</StatDesc>
            </Stat>
            <Stat>
              <StatNumber>6</StatNumber>
              <StatDesc>Apps live in production 🚀</StatDesc>
            </Stat>
            <Stat>
              <StatNumber>32</StatNumber>
              <StatDesc>Estimated open tabs 🧠</StatDesc>
            </Stat>
            <Stat>
              <StatNumber>0</StatNumber>
              <StatDesc>Merge conflicts (this week) 😅</StatDesc>
            </Stat>
          </StatsGrid>
        </StatsContainer>
        <FunFacts ref={factsRef}>
          <CardHeader>
            <GradientBar />
            <CardTitle small>Fun Facts</CardTitle>
          </CardHeader>
          <FactsGrid>
            <SpotlightCard>
              <FactItem>
                ⚾<FactText>Have 7 career home runs</FactText>
              </FactItem>
            </SpotlightCard>
            <SpotlightCard>
              <FactItem>
                ✈️<FactText>Visited 10 countries</FactText>
              </FactItem>
            </SpotlightCard>
            <SpotlightCard>
              <FactItem>
                🎥
                <FactText>
                  Have a YouTube video with over 1.8 million views
                </FactText>
              </FactItem>
            </SpotlightCard>
            <SpotlightCard>
              <FactItem>
                🌎
                <FactText>
                  Know every country, its flag, and where it is on the map
                </FactText>
              </FactItem>
            </SpotlightCard>
            <SpotlightCard>
              <FactItem>
                🪂
                <FactText>Skydived at 13,000 feet in Bologna, Italy</FactText>
              </FactItem>
            </SpotlightCard>
            <SpotlightCard>
              <FactItem>
                🎷
                <FactText>
                  Played saxophone at a famous jazz club in Havana, Cuba
                </FactText>
              </FactItem>
            </SpotlightCard>
          </FactsGrid>
        </FunFacts>
      </ContentGrid>
      <BeyondTheKeyboard />
    </Container>
  )
})

About.displayName = "About"
