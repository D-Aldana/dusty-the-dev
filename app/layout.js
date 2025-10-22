import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dustin Aldana | Full-Stack Development',
  description:
    'A full-stack developer specializing in building beautiful and functional applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head lang="en">
        <link rel="icon" href="/icons/icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
