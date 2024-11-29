import { Inter } from "next/font/google";
import { Metadata } from "next";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://eduverse.uz'),
  title: {
    default: "EduVerse | Professional Education Platform",
    template: "%s | EduVerse"
  },
  description: "EduVerse is a comprehensive education platform offering professional courses, expert-led training, and innovative learning solutions for individuals and organizations.",
  keywords: [
    "professional education",
    "expert training",
    "skill development",
    "career advancement",
    "professional certification",
    "industry experts",
    "corporate training",
    "professional development",
    "EduVerse",
    "learning platform"
  ],
  authors: [{ name: "EduVerse", url: "https://eduverse.uz" }],
  creator: "EduVerse",
  publisher: "EduVerse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'uz-UZ': '/uz',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'EduVerse',
    title: 'EduVerse | Professional Education Platform',
    description: 'Transform your professional journey with expert-led courses and innovative learning solutions.',
    url: 'https://eduverse.uz',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EduVerse Platform',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduVerse | Professional Education Platform',
    description: 'Transform your professional journey with expert-led courses and innovative learning solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@eduverse',
    site: '@eduverse',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
  category: 'education',
  classification: 'Education Platform',
  rating: 'general',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'apple-mobile-web-app-title': 'EduVerse',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2b5797',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}
