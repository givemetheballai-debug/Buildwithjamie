import './globals.css'
export const metadata = {
  title: 'Jamie Williams | AI Tools, Tips & Resources - Build With Jamie',
  description: 'Learn AI from someone who actually uses it. Get practical tips, templates, and tools. No tech bro BS.',
  metadataBase: new URL('https://buildwithjamie.com'),
  openGraph: {
    title: 'Jamie Williams | AI Tools, Tips & Resources',
    description: 'Learn AI from someone who actually uses it. Get practical tips, templates, and tools. No tech bro BS.',
    url: 'https://buildwithjamie.com',
    siteName: 'Build With Jamie',
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
    title: 'Jamie Williams | AI Tools, Tips & Resources',
    description: 'Learn AI from someone who actually uses it. No tech bro BS.',
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
