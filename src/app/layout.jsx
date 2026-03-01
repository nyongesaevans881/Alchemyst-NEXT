import { Providers } from './Providers'
import '@/index.css'

export const metadata = {
  title: 'Alchemyst',
  description: 'Your premium service platform',
  icons: {
    icon: '/favicon-32x32.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
