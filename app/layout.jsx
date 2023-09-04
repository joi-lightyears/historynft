import '../styles/globals.scss'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'NFT',
  description: 'Made by Thanh Dat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
