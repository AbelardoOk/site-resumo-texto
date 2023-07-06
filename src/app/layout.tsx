import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: 'variable', variable: '--font-montserrat' } )

export const metadata = {
  title: 'Resumidor de textos',
  description: 'Resuma seus textos aqui utilizando IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-[#2E294E] text-[#EFBCD5] font-sans`}>{children}</body>
    </html>
  )
}
