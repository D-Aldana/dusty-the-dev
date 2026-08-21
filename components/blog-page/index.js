"use client"
import Link from "next/link"
import styled from "@emotion/styled"
import { PostCard } from "@/components/post-card"
import { breakpoints, container } from "@/styles/theme"

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  /* the hero's cream wash works because its text sits mid-gradient; these pages
     are text-left, so a soft olive glow keeps contrast even in the corner. */
  background-color: ${({ theme }) => theme.background};
  background-image: radial-gradient(
    90% 60% at 10% 0%,
    ${({ theme }) => `${theme.olive}55`} 0%,
    transparent 62%
  );
  padding-block: 3rem 5rem;
`

const Inner = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
`

const BackLink = styled(Link)`
  align-self: flex-start;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.oliveText};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.foreground};
  letter-spacing: 0.125rem;
  margin-top: 2rem;

  ${breakpoints.mobile} {
    font-size: 2.25rem;
    letter-spacing: 0.075rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 44rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.primaryText};
  opacity: 0.85;
  margin-top: 0.75rem;

  ${breakpoints.mobile} {
    font-size: 1rem;
  }
`

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 2rem;
  margin-top: 3rem;

  ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Empty = styled.p`
  margin-top: 3rem;
  color: ${({ theme }) => theme.primaryText};
  opacity: 0.8;
`

export const BlogPage = ({ posts = [] }) => (
  <Page>
    <Inner>
      <BackLink href="/">&larr; Back home</BackLink>
      <Title>Writing</Title>
      <Subtitle>
        Long-form notes on the things I build — what worked, what I deleted, and
        the lessons that only show up after shipping.
      </Subtitle>
      {posts.length === 0 ? (
        <Empty>Nothing published yet. First post is in the works.</Empty>
      ) : (
        <PostGrid>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </PostGrid>
      )}
    </Inner>
  </Page>
)
