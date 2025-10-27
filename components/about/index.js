import { forwardRef } from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { breakpoints } from "@/styles/theme"
import { Base } from "@/components/base"
import { SpotlightCard } from "@/components/spotlight-card"
import { ImageFolder } from "@/components/image-folder"
import { MyStory as myStoryContent } from "@/util/consts"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1.5rem;
  gap: 1rem;
  position: relative;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
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
  z-index: 1;

  ${breakpoints.mobile} {
    right: 1.5rem;
  }
`

export const About = forwardRef((props, ref) => {
  const theme = useTheme()
  return (
    <Container ref={ref}>
      <Base title="1ST" />
      <Header>
        <StickerContainer>
          <StickerText>About Me</StickerText>
        </StickerContainer>
        <Subtitle>
          Beyond the code: who am I when I&apos;m not building applications
        </Subtitle>
      </Header>
      <ContentGrid>
        <ImageContainer>
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
        <MyStory>
          <CardHeader>
            <GradientBar />
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <StoryText>{myStoryContent.content}</StoryText>
        </MyStory>

        <StatsContainer>
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
        <FunFacts>
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
    </Container>
  )
})

About.displayName = "About"
