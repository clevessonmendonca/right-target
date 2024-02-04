import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Right Target',
  description:
    'Professional and reliable residential cleaning service. Transform your home with Right Target.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="VxeuB8TJ-CEFTosdIEd6sPNsGm2FWPKNYzYVVrcVKpo"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11139734703"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11139734703');
            `,
        }}
      />
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <SpeedInsights />
          <Toaster richColors theme="light" />
        </div>
      </body>
    </html>
  )
}
