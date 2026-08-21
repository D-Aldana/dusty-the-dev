"use client"
import { useState } from "react"
import { CacheProvider, ThemeProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { useServerInsertedHTML } from "next/navigation"
import { MotionConfig } from "framer-motion"
import { theme } from "@/styles/theme"

/* The homepage renders client-only, so it never needed Emotion's SSR hook.
   Blog pages do server-render, so their styles have to ship with the HTML or
   the first paint is unstyled. */
const useEmotionCache = () => {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "btd" })
    cache.compat = true

    const insert = cache.insert
    let inserted = []
    cache.insert = (...args) => {
      const [, serialized] = args
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return insert(...args)
    }

    const flush = () => {
      const names = inserted
      inserted = []
      return names
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: names.map((name) => cache.inserted[name]).join(""),
        }}
      />
    )
  })

  return cache
}

/* Pages outside the homepage need the same theme context it sets up, without
   inheriting its scroll refs and section state. */
export const AppTheme = ({ children, mode = "dark" }) => {
  const cache = useEmotionCache()

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme[mode]}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}
