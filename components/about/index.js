import { forwardRef } from "react"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import { breakpoints } from "@/styles/theme"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
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

const StickerText = styled.p`
  font-size: 3.75rem;
  font-weight: 500;

  ${breakpoints.mobile} {
    font-size: 1.5rem;
  }
`

export const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Title>
        <StickerContainer>
          <StickerText>About Me</StickerText>
        </StickerContainer>
      </Title>
      <p>
        I am a full-stack developer with a passion for building web
        applications.
      </p>
    </Container>
  )
})

About.displayName = "About"
