import { Home } from "@/components/home"
import { getAllPosts } from "@/util/blog"

const LATEST_POSTS = 3

export default function HomePage() {
  return <Home posts={getAllPosts({ limit: LATEST_POSTS })} />
}
