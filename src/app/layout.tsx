import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work for Immigration',
  description:
    'Professional and reliable residential cleaning service. Transform your home with Work for Immigration.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Adicione o código do Google Ads aqui */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11139734703"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11139734703');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
