"use client"
import { forwardRef, useEffect } from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PostCard } from "@/components/post-card"
import { breakpoints, container } from "@/styles/theme"
import { prefersReducedMotion } from "@/util/motion"

gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
  margin-top: 2rem;
  position: relative;
`

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.foreground};
  text-align: center;
  letter-spacing: 0.125rem;

  ${breakpoints.mobile} {
    font-size: 2rem;
    letter-spacing: 0.075rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primaryText};
  margin-top: 0.5rem;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 0.025rem;

  ${breakpoints.mobile} {
    font-size: 1rem;
    letter-spacing: 0.015rem;
  }
`

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 2rem;
  padding-block: 2rem;
  width: 100%;

  ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const AllPostsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.oliveText};
  padding: 0.5rem 2rem;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.oliveText};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.muted};
    color: ${({ theme }) => theme.cream};
  }
`

export const Blog = forwardRef(({ posts = [] }, ref) => {
  useEffect(() => {
    const el = ref?.current
    if (!el || prefersReducedMotion()) return

    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      },
    )
  }, [ref])

  if (posts.length === 0) return null

  return (
    <Container ref={ref}>
      <Header>From the Notebook</Header>
      <Subtitle>
        Notes on what I&apos;m building, breaking, and rethinking
      </Subtitle>
      <PostGrid>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </PostGrid>
      <AllPostsLink href="/blog">Read all posts &rarr;</AllPostsLink>
    </Container>
  )
})

Blog.displayName = "Blog"
