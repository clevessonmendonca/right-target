import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

const GTM_ID = 'GTM-KXCK2GK5'

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '408751431631038');
fbq('track', 'PageView');
`,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-79R1P6CNFF"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-79R1P6CNFF');
            `,
        }}
      />
      {/* Second Tag */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11487384613');
            `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11487384613"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11487384613');
            `,
        }}
      />
      {/* Third Tag */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16454295654');
            `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16454295654"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16454295654');
            `,
        }}
      />
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />

        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
          <SpeedInsights />
          <Analytics />
          <GoogleAnalytics gaId="G-HT8CZ8BYCP" />
          <Toaster richColors theme="light" />
        </div>
      </body>
    </html>
  )
}
