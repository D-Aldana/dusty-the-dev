import { forwardRef, useRef, useEffect, use } from "react"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Base } from "@/components/base"
import { EducationIcon, WorkIcon } from "@/components/icons"
import { SpotlightCard } from "@/components/spotlight-card"
import { breakpoints } from "@/styles/theme"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 0 8rem;
  overflow: hidden;

  ${breakpoints.mobile} {
    padding: 0 2rem;
  }
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

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 1rem;
  min-height: 400px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: ${({ theme }) => theme.olive};
    opacity: 0.6;
  }
`

const TimelineItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 6rem;
`

const TimelineOuterCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.forest};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.olive};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const TimelineInnerCircle = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.bronze};
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px ${({ theme }) => theme.bronze};
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 10px ${({ theme }) => theme.bronze};
    }

    50% {
      box-shadow: 0 0 20px ${({ theme }) => theme.bronze};
    }

    100% {
      box-shadow: 0 0 10px ${({ theme }) => theme.bronze};
    }
  }
`

const TimelineCard = styled(SpotlightCard)`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.cardForeground};
  width: 100%;
  border: 4px solid ${({ theme }) => `${theme.bronze}40`};
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.3 ease,
    border 0.3s ease;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 8px 15px rgb(0, 0, 0, 0.3);
    border: 4px solid ${({ theme }) => `${theme.bronze}70`};
    transition:
      box-shadow 0.3 ease,
      border 0.3 ease;
  }
`

const TimelineHeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const TimelineHeaderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `${theme.bronze}30`};
  color: ${({ theme }) => theme.bronze};
  height: 3rem;
  width: 3rem;
  border-radius: 8px;
`

const TimelineHeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TimelineType = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.bronze};
  margin-bottom: 0.25rem;
`

const TimelineTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`

const TimelineDateWrapper = styled.div`
  width: 100%;
  text-align: ${(props) => (props.right ? "left" : "right")};
  margin-top: 0.4rem;
  transform: ${(props) =>
    props.right ? "translateX(-15px)" : "translateX(15px)"};
`

const TimelineDate = styled.span`
  padding: 0.4rem 0.75rem;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.bronze},
    ${({ theme }) => theme.rust}
  );
  border-radius: 1rem;
  color: ${({ theme }) => theme.cream};
  font-weight: 600;
  box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.3);
`

const TimelineCompany = styled.p`
  font-size: 0.875rem;
`

const TimelineDescription = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  list-style-type: disc;
  font-size: 0.75rem;
  gap: 0.25rem;
`

export const Timeline = forwardRef((props, ref) => {
  const baseRef = useRef(null)

  return (
    <Container ref={ref}>
      <Base title="3RD" ref={baseRef} />
      <Header>
        <StickerContainer>
          <StickerText>My Journey</StickerText>
        </StickerContainer>
        <Subtitle>
          A timeline of my experiences and milestones throughout my career
        </Subtitle>
      </Header>

      <TimelineContainer>
        <TimelineItem>
          <TimelineDateWrapper>
            <TimelineDate>October 2023 - Present</TimelineDate>
          </TimelineDateWrapper>
          <TimelineOuterCircle>
            <TimelineInnerCircle />
          </TimelineOuterCircle>
          <TimelineCard>
            <TimelineHeaderWrapper>
              <TimelineHeaderIconWrapper>
                <WorkIcon />
              </TimelineHeaderIconWrapper>
              <TimelineHeaderTextWrapper>
                <TimelineType>Work</TimelineType>
                <TimelineTitle>Full-Stack Software Developer</TimelineTitle>
                <TimelineCompany>Input Logic</TimelineCompany>
              </TimelineHeaderTextWrapper>
            </TimelineHeaderWrapper>
            <TimelineDescription>
              <li>
                Develop and maintain full-stack applications using Next.js,
                Django, and React Native
              </li>
              <li>
                Migrate standalone React Native apps to Expo for improved
                development efficiency
              </li>
              <li>Maintain Stripe payment integrations</li>
              <li>Implement and manage media storage solutions with AWS S3</li>
              <li>
                Implement and maintain analytics for web and mobile with PostHog
              </li>
              <li>Deploy and maintain backend services on Heroku</li>
              <li>Deploy and maintain frontend services on Vercel</li>
              <li>
                Collaborate with developers, designers, and product managers
                using Jira, Figma, and GitHub
              </li>
            </TimelineDescription>
          </TimelineCard>
        </TimelineItem>
        <TimelineItem>
          <TimelineCard>
            <TimelineHeaderWrapper>
              <TimelineHeaderIconWrapper>
                <WorkIcon />
              </TimelineHeaderIconWrapper>
              <TimelineHeaderTextWrapper>
                <TimelineType>Work</TimelineType>
                <TimelineTitle>Software Engineer</TimelineTitle>
                <TimelineCompany>Celayix Software</TimelineCompany>
              </TimelineHeaderTextWrapper>
            </TimelineHeaderWrapper>
            <TimelineDescription>
              <li>
                Led the automated testing team in the implementation of an
                automated test suite using Selenium
              </li>
              <li>
                Built a CI/CD pipeline for quicker feedback on code deployments
                using PyTest parallelization and TeamCity
              </li>
              <li>
                Wrote techincal documentation for the entire test suite and test
                planning
              </li>
            </TimelineDescription>
          </TimelineCard>
          <TimelineOuterCircle>
            <TimelineInnerCircle />
          </TimelineOuterCircle>
          <TimelineDateWrapper right>
            <TimelineDate>May 2022 - August 2023</TimelineDate>
          </TimelineDateWrapper>
        </TimelineItem>
        <TimelineItem>
          <TimelineDateWrapper>
            <TimelineDate>Janurary 2021 - August 2021</TimelineDate>
          </TimelineDateWrapper>
          <TimelineOuterCircle>
            <TimelineInnerCircle />
          </TimelineOuterCircle>
          <TimelineCard>
            <TimelineHeaderWrapper>
              <TimelineHeaderIconWrapper>
                <WorkIcon />
              </TimelineHeaderIconWrapper>
              <TimelineHeaderTextWrapper>
                <TimelineType>Work</TimelineType>
                <TimelineTitle>Research Assistant</TimelineTitle>
                <TimelineCompany>
                  Institute for Integrated Energy Systems (IESVic)
                </TimelineCompany>
              </TimelineHeaderTextWrapper>
            </TimelineHeaderWrapper>
            <TimelineDescription>
              <li>
                Designed and built a robust SQL database for the Canadian energy
                systems grid using
              </li>
              <li>
                Launched a containerized Flask REST API on UVic cloud computing
                services for integration with energy prediction models
              </li>
              <li>Developed dynamic data visualizations using Python Bokeh</li>
              <li>
                Had my work documented and published in Energy Systems Review
                Volume 44
              </li>
            </TimelineDescription>
          </TimelineCard>
        </TimelineItem>
        <TimelineItem>
          <TimelineCard>
            <TimelineHeaderWrapper>
              <TimelineHeaderIconWrapper>
                <EducationIcon />
              </TimelineHeaderIconWrapper>
              <TimelineHeaderTextWrapper>
                <TimelineType>Education</TimelineType>
                <TimelineTitle>Bachelor of Software Engineering</TimelineTitle>
                <TimelineCompany>University of Victoria</TimelineCompany>
              </TimelineHeaderTextWrapper>
            </TimelineHeaderWrapper>
            <TimelineDescription>
              <li>Completed 4 semesters of full-time co-op placements</li>
              <li>
                Gained hands-on experience in software development fundamentals,
                system design, and teamwork
              </li>
              <li>
                Survived thrived through countless group projects, assignments,
                and exams with my classmates
              </li>
            </TimelineDescription>
          </TimelineCard>
          <TimelineOuterCircle>
            <TimelineInnerCircle />
          </TimelineOuterCircle>
          <TimelineDateWrapper right>
            <TimelineDate>September 2019 - August 2023</TimelineDate>
          </TimelineDateWrapper>
        </TimelineItem>
        <TimelineItem>
          <TimelineDateWrapper>
            <TimelineDate>September 2017 - April 2019</TimelineDate>
          </TimelineDateWrapper>
          <TimelineOuterCircle>
            <TimelineInnerCircle />
          </TimelineOuterCircle>
          <TimelineCard>
            <TimelineHeaderWrapper>
              <TimelineHeaderIconWrapper>
                <EducationIcon />
              </TimelineHeaderIconWrapper>
              <TimelineHeaderTextWrapper>
                <TimelineType>Education</TimelineType>
                <TimelineTitle>
                  Fundamentals of Engineering Certificate
                </TimelineTitle>
                <TimelineCompany>Vancouver Island University</TimelineCompany>
              </TimelineHeaderTextWrapper>
            </TimelineHeaderWrapper>
            <TimelineDescription>
              <li>
                Completed my first computer science course and discovered a
                strong passion for programming
              </li>
              <li>
                Led a team whose design project won the student popularity award
                in engineering
              </li>
              <li>
                Balanced the grind of varsity baseball with the demands of
                school
              </li>
            </TimelineDescription>
          </TimelineCard>
        </TimelineItem>
      </TimelineContainer>
    </Container>
  )
})

Timeline.displayName = "Timeline"
