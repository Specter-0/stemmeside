import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UwU',
  description: 'fuck henrik bros',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          
          {children}
          
          <Footer/>
        </div>
      </body>
    </html>
  )
}
