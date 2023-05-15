import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContext'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RapidMessage - Fast messaging app',
  description: 'RapidMessage is a simple and fast messaging app.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  )
}
