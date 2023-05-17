import { Inter } from 'next/font/google'

import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RappidMessage',
  description: 'A simple chat app built with Next.js, TypeScript, and Tailwind CSS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
