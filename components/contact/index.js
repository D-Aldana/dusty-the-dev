import { forwardRef, useRef, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/spotlight-card"
import {
  HomePlateIcon,
  ContactEnvelope,
  PhoneIcon,
  LocationIcon,
} from "@/components/icons"

import { breakpoints } from "@/styles/theme"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 4rem;
  gap: 1rem;
  position: relative;
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
  margin-top: 3rem;
  width: 100%;
`

const StickerContainer = styled.div`
  display: inline-block;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.olive},
    ${({ theme }) => theme.forest}
  );
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  transform: rotate(-1deg);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border: none;
  color: ${({ theme }) => theme.cream};
`

const StickerText = styled.h2`
  font-weight: 600;
  font-size: 3.25rem;
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

const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  gap: 2rem;

  ${breakpoints.mobile} {
    flex-direction: column;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: blue;
`

const DetailsHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
`

const SubtitleText = styled.p`
  color: ${({ theme }) => `${theme.primaryText}90`};
`

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-around;
`

const ContactCard = styled(SpotlightCard)`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  border: 2px solid ${({ theme }) => `${theme.bronze}40`};
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition:
    box-shadow 0.3s ease,
    border 0.3s ease;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `${theme.bronze}30`};
  color: ${({ theme }) => theme.bronze};
  height: 3rem;
  width: 3rem;
  border-radius: 8px;
`

const ContactValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.325rem;
`

const ContactLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.primaryText};
`

const ContactInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 0;
`

const AvailabilityBadge = styled(SpotlightCard)`
  width: 100%;
  background: radial-gradient(
    circle at 25% 25%,
    ${({ theme }) => theme.olive},
    ${({ theme }) => theme.forest}
  );
  color: ${({ theme }) => theme.cream};
  border: 2px solid ${({ theme }) => theme.olive};
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.125rem;
`

const StatusLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.cream};
  opacity: 0.8;
`

const StatusText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.rust};
`

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
`

const Indicator = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.bronze};
  margin-right: 0.5rem;
  box-shadow: 0 0 10px ${({ theme }) => theme.bronze};

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 5px ${({ theme }) => theme.bronze};
    }
    50% {
      transform: scale(1.2);
      box-shadow: 0 0 15px ${({ theme }) => theme.bronze};
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 5px ${({ theme }) => theme.bronze};
    }
  }

  animation: pulse 2s infinite;
`

const IndicatorText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.cream};
`

export const ContactMe = forwardRef((props, ref) => {
  const theme = useTheme()

  return (
    <Container ref={ref}>
      <Header>
        <StickerContainer>
          <StickerText>Contact Me</StickerText>
        </StickerContainer>
        <Subtitle>Ready to build something awesome? Let&apos;s chat!</Subtitle>
      </Header>
      <ContactContent>
        <ContactDetails>
          <DetailsHeader>
            <Title>Get in Touch</Title>
            <SubtitleText>
              Whether you have a project in mind, want to collaborate, or just
              want to say hi, I&apos;d love to hear from you. Let&apos;s make
              something great together!
            </SubtitleText>
          </DetailsHeader>
          <ContactCards>
            <ContactCard>
              <IconWrapper>
                <ContactEnvelope color={theme.bronze} width={20} height={20} />
              </IconWrapper>
              <ContactValue>
                <ContactLabel>Email</ContactLabel>
                <ContactInfo>{process.env.NEXT_PUBLIC_EMAIL}</ContactInfo>
              </ContactValue>
            </ContactCard>
            <ContactCard>
              <IconWrapper>
                <PhoneIcon color={theme.bronze} width={20} height={20} />
              </IconWrapper>
              <ContactValue>
                <ContactLabel>Phone</ContactLabel>
                <ContactInfo>{process.env.NEXT_PUBLIC_PHONE}</ContactInfo>
              </ContactValue>
            </ContactCard>
            <ContactCard>
              <IconWrapper>
                <LocationIcon color={theme.bronze} width={20} height={20} />
              </IconWrapper>
              <ContactValue>
                <ContactLabel>Location</ContactLabel>
                <ContactInfo>{process.env.NEXT_PUBLIC_LOCATION}</ContactInfo>
              </ContactValue>
            </ContactCard>
          </ContactCards>
          <AvailabilityBadge>
            <StatusWrapper>
              <StatusLabel>Availability Status</StatusLabel>
              <StatusText>Open for opportunities</StatusText>
            </StatusWrapper>
            <StatusIndicator>
              <Indicator />
              <IndicatorText>Available</IndicatorText>
            </StatusIndicator>
          </AvailabilityBadge>
        </ContactDetails>
        <ContactForm>Your Contact Form Here</ContactForm>
      </ContactContent>
    </Container>
  )
})

ContactMe.displayName = "ContactMe"
