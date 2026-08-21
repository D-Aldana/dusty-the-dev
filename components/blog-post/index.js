"use client"
import Link from "next/link"
import styled from "@emotion/styled"
import { breakpoints, layout } from "@/styles/theme"

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

/* Articles read at a narrower measure than the section grids, so this sets its
   own width instead of reusing the 1200px container. */
const Inner = styled.div`
  width: 100%;
  max-width: 46rem;
  margin-inline: auto;
  padding-inline: ${layout.gutter};

  ${breakpoints.mobile} {
    padding-inline: ${layout.gutterMobile};
  }
`

const BackLink = styled(Link)`
  display: inline-block;
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
  font-size: 2.75rem;
  line-height: 1.15;
  color: ${({ theme }) => theme.foreground};
  text-wrap: balance;
  margin-top: 1.75rem;

  ${breakpoints.mobile} {
    font-size: 2rem;
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.oliveText};
`

const Dot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: currentColor;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 1rem;
`

const Tag = styled.span`
  background-color: ${({ theme }) => `${theme.bronze}1f`};
  border: 1px solid ${({ theme }) => `${theme.bronze}70`};
  color: ${({ theme }) => theme.bronze};
  padding: 0.1rem 0.45rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
`

const Rule = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => `${theme.olive}80`};
  margin-block: 2rem;
`

/* Prose styles live on the wrapper: the MDX output is plain HTML, so there is
   no component map to keep in sync. */
const Body = styled.article`
  color: ${({ theme }) => theme.primaryText};
  font-family: var(--font-montserrat), sans-serif;
  font-size: 1.0625rem;
  line-height: 1.8;

  h2,
  h3 {
    color: ${({ theme }) => theme.foreground};
    line-height: 1.3;
    text-wrap: balance;
  }

  h2 {
    font-size: 1.75rem;
    margin-top: 2.5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  p,
  ul,
  ol,
  pre,
  blockquote {
    margin-top: 1.25rem;
  }

  ul,
  ol {
    padding-left: 1.5rem;
  }

  li {
    margin-top: 0.4rem;
  }

  li::marker {
    color: ${({ theme }) => theme.bronze};
  }

  strong {
    color: ${({ theme }) => theme.foreground};
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.bronze};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.bronze};
    padding: 0.25rem 0 0.25rem 1.25rem;
    color: ${({ theme }) => theme.oliveText};
    font-style: italic;
  }

  blockquote p {
    margin-top: 0;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.875em;
    background-color: ${({ theme }) => `${theme.olive}40`};
    border: 1px solid ${({ theme }) => `${theme.olive}80`};
    border-radius: 4px;
    padding: 0.1rem 0.3rem;
  }

  pre {
    background-color: ${({ theme }) => `${theme.forest}`};
    border: 1px solid ${({ theme }) => theme.olive};
    border-radius: 0.5rem;
    padding: 1rem 1.15rem;
    overflow-x: auto;
  }

  pre code {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.85rem;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }

  ${breakpoints.mobile} {
    font-size: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`

const Footer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const NavLink = styled(Link)`
  flex: 1;
  border: 2px solid ${({ theme }) => theme.olive};
  border-radius: 0.75rem;
  padding: 0.9rem 1.1rem;
  background-color: ${({ theme }) => theme.forest};
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.bronze};
  }
`

const NavDirection = styled.span`
  display: block;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.oliveText};
`

const NavTitle = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.cream};
`

export const BlogPost = ({ post, previous, next, children }) => (
  <Page>
    <Inner>
      <BackLink href="/blog">&larr; All posts</BackLink>
      <Title>{post.title}</Title>
      <Meta>
        {post.date && <time dateTime={post.date}>{post.dateLabel}</time>}
        <Dot aria-hidden />
        <span>{post.readingTimeMinutes} min read</span>
      </Meta>
      {post.tags.length > 0 && (
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Rule />
      <Body>{children}</Body>
      {(previous || next) && (
        <Footer aria-label="More posts">
          {next && (
            <NavLink href={`/blog/${next.slug}`}>
              <NavDirection>Newer</NavDirection>
              <NavTitle>{next.title}</NavTitle>
            </NavLink>
          )}
          {previous && (
            <NavLink href={`/blog/${previous.slug}`}>
              <NavDirection>Older</NavDirection>
              <NavTitle>{previous.title}</NavTitle>
            </NavLink>
          )}
        </Footer>
      )}
    </Inner>
  </Page>
)
