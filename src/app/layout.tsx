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
  title: 'Right Target - Cleaning Services',
  description:
    'Discover the exceptional cleaning services at Right Target. We specialize in providing professional and reliable cleaning solutions for homes and businesses. Elevate your living and working spaces with our experienced team and tailored cleaning packages. Your satisfaction is our priority. Contact us today for a cleaner, healthier environment!',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta
          name="google-site-verification"
          content="VxeuB8TJ-CEFTosdIEd6sPNsGm2FWPKNYzYVVrcVKpo"
        />
        <meta
          name="keywords"
          content="cleaning, cleaning services, residential cleaning, commercial cleaning"
        />
        <meta name="author" content="Right Target" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Right Target - Professional Cleaning Services"
        />
        <meta
          property="og:description"
          content="We offer professional cleaning services for homes and businesses."
        />
        <meta
          property="og:image"
          content="/beautiful-photo-of-a-modern-home-kitchen.jpg"
        />
        <meta
          property="og:url"
          content="/beautiful-photo-of-a-modern-home-kitchen.jpg"
        />
        {/* Facebook and Instagram Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="article:author"
          content="https://www.facebook.com/profile.php?id=61555770274333"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/profile.php?id=61555770274333"
        />
        <meta property="og:site_name" content="Right Target" />
        <meta
          property="og:see_also"
          content="https://www.instagram.com/right_.target/"
        />
        <link rel="canonical" href="https://righttargetservice.com/" />
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
