import './globals.css'

export const metadata = {
  title: 'Jamie Williams | AI Product Builder',
  description: '15 years scaling products. Now shipping AI tools. No hype, just builds.',
  metadataBase: new URL('https://buildwithjamie.com'),
  openGraph: {
    title: 'Jamie Williams | AI Product Builder',
    description: '15 years scaling products. Now shipping AI tools.',
    url: 'https://buildwithjamie.com',
    siteName: 'Jamie Williams',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jamie Williams | AI Product Builder',
    description: '15 years scaling products. Now shipping AI tools.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
