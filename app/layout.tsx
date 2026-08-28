import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-kevin-florez.vercel.app"),

  title: {
    default: "Kevin Flórez | Software Developer",
    template: "%s | Kevin Flórez",
  },

  description:
    "Portfolio of Kevin Flórez, Software Developer and Systems Engineering student experienced in Java, Spring Boot, JavaScript, TypeScript, React, Next.js, PostgreSQL and modern web development.",

  keywords: [
    "Kevin Flórez",
    "Kevin Ivan Florez",
    "Software Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Java",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "Web Developer",
    "Systems Engineering",
    "Colombia",
  ],

  authors: [
    {
      name: "Kevin Flórez",
      url: "https://github.com/kevinfb27",
    },
  ],

  creator: "Kevin Flórez",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portafolio-kevin-florez.vercel.app",
    siteName: "Kevin Flórez Portfolio",
    title: "Kevin Flórez | Software Developer",
    description:
      "Software Developer building modern web applications with Java, Spring Boot, JavaScript, TypeScript, React and Next.js.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kevin Flórez | Software Developer",
    description:
      "Software Developer building modern web applications with Java, Spring Boot, JavaScript, TypeScript, React and Next.js.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a2332",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}