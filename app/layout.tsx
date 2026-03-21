import type { Metadata } from 'next'
import { Syne, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Kaminify — Clone Any Site's Design. Keep Your Content.",
  description:
    "Paste two URLs. Kaminify scrapes the design from one site and the content from another, then generates a fully cloned, multi-page site in minutes. Try free with your own API key.",
  openGraph: {
    title: "Kaminify — Clone Any Site's Design",
    description: 'Paste two URLs. Get a cloned multi-page site in minutes.',
    url: 'https://kaminify.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
