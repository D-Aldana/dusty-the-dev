import { Cormorant_Garamond, Nunito } from "next/font/google"
import OliveBranch from "./OliveBranch"
import styles from "./manna-legal.module.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
})

export default function MannaLegal({ eyebrow, title, meta, lede, children, contact }) {
  return (
    <main className={`${cormorant.variable} ${nunito.variable} ${styles.root}`}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <OliveBranch className={styles.watermark} />
          <OliveBranch className={styles.crest} />
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          {meta && <p className={styles.meta}>{meta}</p>}
        </header>

        <span className={styles.divider} aria-hidden="true" />

        {lede && <p className={styles.lede}>{lede}</p>}

        <article className={styles.body}>{children}</article>

        {contact && <section className={styles.contact}>{contact}</section>}
      </div>
    </main>
  )
}
