import type { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru" className="bg-[#0b0c0e]">
      <head>
        <meta charSet="utf-8" />
        <title>Panda Casino официальный сайт — играть онлайн в Панда Казино зеркало</title>
        <meta
          name="description"
          content="Официальный сайт Panda Casino: актуальное рабочее зеркало на сегодня, быстрый вход, бонус до 225% + 1500 FS на первый депозит. Играйте в лицензионные слоты онлайн в Панда Казино с мгновенными выплатами."
        />
        <meta name="keywords" content="panda casino, panda casino зеркало, panda casino играть, panda casino официальный, panda casino официальный сайт, panda казино, панда казино, панда казино зеркало, панда казино зеркало рабочее, панда казино играть, панда казино онлайн, панда казино официальный, панда казино официальный сайт" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://pandacasino3.vercel.app" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Panda Casino официальный сайт — играть онлайн в Панда Казино зеркало" />
        <meta
          property="og:description"
          content="Рабочее зеркало Panda Casino онлайн. До 225% бонуса + 1500 FS на депозит, мгновенные выплаты через СБП, МИР, крипту. Играйте в слоты на официальном сайте Панда Казино."
        />
        <meta property="og:url" content="https://pandacasino3.vercel.app" />
        <meta property="og:site_name" content="Panda Casino" />
        <meta property="og:image" content="https://pandacasino3.vercel.app/images/panda-hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Panda Casino официальный сайт — играть онлайн в Панда Казино зеркало" />
        <meta
          name="twitter:description"
          content="Актуальное рабочее зеркало Панда Казино онлайн. Бонус 225% + 1500 FS, моментальный вывод, топовые слоты Panda Casino."
        />
        <meta name="twitter:image" content="https://pandacasino3.vercel.app/images/panda-hero.png" />
        
        <meta name="theme-color" content="#0b0c0e" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="bg-[#0b0c0e] text-[#f4f5f7] antialiased selection:bg-[#00e575] selection:text-black">
        {children}
      </body>
    </html>
  )
}
