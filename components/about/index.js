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
  gap: 4rem;
`

const Header = styled.div`
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
  font-size: 3.25rem;
  font-weight: 500;

  ${breakpoints.mobile} {
    font-size: 2.25rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 1.25rem;
`

const Content = styled.div``

export const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Header>
        <StickerContainer>
          <StickerText>About Me</StickerText>
        </StickerContainer>
        <Subtitle>
          Beyond the code: who I&apos;m not building applications
        </Subtitle>
      </Header>
      <Content></Content>
    </Container>
  )
})

About.displayName = "About"
