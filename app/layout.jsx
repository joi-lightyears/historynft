import '@/styles/globals.scss'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
 })

export const metadata = {
  title: 'NFT',
  description: 'Made by Thanh Dat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
