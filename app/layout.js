import { Playfair_Display, Montserrat, Bebas_Neue } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
})

export const metadata = {
  title: "Dustin Aldana | Full-Stack Development",
  description:
    "A full-stack developer specializing in building beautiful and functional applications.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head lang="en">
        <link rel="icon" href="/images/icon.png" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${bebas.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
