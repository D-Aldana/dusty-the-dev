# Blog posts

One `.mdx` file per post; the filename is the URL slug
(`shipping-manna.mdx` → `/blog/shipping-manna`).

```mdx
---
title: "Shipping Manna: one verse, no notifications"
date: "2026-06-12"
excerpt: "One or two sentences, used on the cards and as the meta description."
tags: ["React Native", "Product"]
draft: false
---

Markdown body. `##` and `###` headings, lists, links, blockquotes, and fenced
code blocks are all styled.
```

`title` and `date` (`YYYY-MM-DD`) are required — everything else is optional.
Reading time comes from the word count unless a post sets `readingTimeMinutes`.
Posts with `draft: true` are hidden everywhere.

With no posts, the homepage section and its hero button don't render.
