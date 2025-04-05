import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Adam Glasser',
    default: 'Adam Glasser - Customer Engineer & Solutions Architect',
  },
  icons: {
    icon: [
      { url: '/man-technologist.svg?v=3', type: 'image/svg+xml' },
      { url: '/favicon.png?v=3', type: 'image/png' }
    ],
    shortcut: [
      { url: '/man-technologist.svg?v=3', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/man-technologist.svg?v=3', type: 'image/svg+xml' },
      { url: '/favicon.png?v=3', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/man-technologist.svg?v=3' }
    ]
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-[var(--volcanic-black)] text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
