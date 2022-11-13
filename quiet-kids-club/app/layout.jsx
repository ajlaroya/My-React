import './globals.css'
import { Cormorant } from '@next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cormorant = Cormorant({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Quiet Kids Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${cormorant.className} bg-[#0E1111]`}>
        <Navbar />
         {children}  
        <Footer />
      </body>
    </html>
  )
}
