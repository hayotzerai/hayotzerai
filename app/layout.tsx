import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'hayotzer AI',
  description: 'Created with Hayotzer',
  generator: 'hayotzer AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
