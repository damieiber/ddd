import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { i18n } from '@/i18n-config'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Dami Eiberman | Fullstack Developer, Data Scientist & Data Analyst',
  description: 'Building Scalable Code. Extracting Actionable Insights. Professional portfolio showcasing fullstack development and data analytics expertise.',
  keywords: ['Fullstack Developer', 'Data Analyst', 'React', 'Next.js', 'Python', 'Data Visualization', 'Machine Learning'],
  authors: [{ name: 'Dami Eiberman' }],
  openGraph: {
    title: 'Dami Eiberman | Fullstack Developer & Data Analyst',
    description: 'Building Scalable Code. Extracting Actionable Insights.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dami Eiberman | Fullstack Developer & Data Analyst',
    description: 'Building Scalable Code. Extracting Actionable Insights.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-50 antialiased`}>
        <div className="relative min-h-screen grainy">
          {/* Background grid pattern */}
          <div className="fixed inset-0 bg-grid pointer-events-none" />
          
          {/* Gradient orbs for ambient lighting */}
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-dev/10 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-data/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
