import './globals.css'
import { Cormorant } from '@next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cormorant = Cormorant({ subsets: ['latin'] })

export default function RootLayout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title + ' - Quiet Kids Club' : 'Quiet Kids Club'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
