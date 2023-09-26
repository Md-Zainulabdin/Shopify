import AuthProvider from './AuthProvider'
import Navbar from './components/Navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shopify',
  description: 'Developed by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className='w-full px-[20px] md:px-[50px] py-[20px]'>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
