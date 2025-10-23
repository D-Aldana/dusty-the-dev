import { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { HomePlateIcon } from '@/components/icons'

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
    ${(props) => props.theme.cream} 0%,
    ${(props) => props.theme.background} 50%
  );
  color: ${(props) => props.theme.foreground};
`
const FlippedIconWrapper = styled.div`
  transform: scaleY(-1);
  cursor: pointer;
  margin-bottom: 2rem;
`

const Name = styled.h1`
  font-size: 4rem;
`

export const Hero = () => {
  const plateRef = useRef(null)

  const onClickPlate = () => {
    gsap.to(plateRef.current, {
      rotationY: '+=720',
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  useEffect(() => {
    if (!plateRef.current) return

    const paths = plateRef.current.querySelectorAll('path')
    gsap.fromTo(
      paths,
      { drawSVG: '0% 20%' },
      {
        drawSVG: '100% 120%',
        duration: 2,
        ease: 'linear',
        repeat: -1,
      },
    )

    const handleMouseEnter = () => {
      gsap.to(plateRef.current, {
        scale: 1.25,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
    const handleMouseLeave = () => {
      gsap.to(plateRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    plateRef.current.addEventListener('mouseenter', handleMouseEnter)
    plateRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      plateRef.current.removeEventListener('mouseenter', handleMouseEnter)
      plateRef.current.removeEventListener('mouseleave', handleMouseLeave)
      if (spinTween) spinTween.kill()
    }
  }, [])

  return (
    <Container>
      <FlippedIconWrapper onClick={onClickPlate}>
        <HomePlateIcon ref={plateRef} width={125} height={125} />
      </FlippedIconWrapper>
      <Name>Dustin Aldana</Name>
    </Container>
  )
}
