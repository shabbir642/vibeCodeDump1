import '../src/styles/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Valentine Proposal',
  description:
    'Minimal, modern, Korean-inspired Valentine’s themed proposal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-warm-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
