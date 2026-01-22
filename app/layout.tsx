import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

// Ez felel a mobilos címsor színéért (a brand kéket állítottam be)
export const viewport: Viewport = {
  themeColor: "#001F5B",
};

export const metadata: Metadata = {
  // FONTOS: Ezt cseréld majd a végleges domainre (pl. https://teoldalad.vercel.app)
  // Ez kell ahhoz, hogy a közösségi média képek jól működjenek
  metadataBase: new URL("https://coachbase-web.vercel.app"), 

  title: {
    default: "CoachBase | Prémium Weboldal Rendszerek Edzőknek",
    template: "%s | CoachBase", // Így más oldalakon ez lesz: "Kapcsolat | CoachBase"
  },
  description:
    "Automatizált ügyfélszerzés és profi online jelenlét személyi edzőknek. Felejtsd el a Linktree-t és a DM káoszt, építs stabil digitális bázist.",
  
  keywords: ["személyi edző weboldal", "fitnesz marketing", "coach weboldal", "ügyfélszerzés", "online coaching"],
  
  authors: [{ name: "CoachBase" }],
  creator: "CoachBase",
  
  // Ez állítja be az ikont a böngészőfülön
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png", // Ha valaki kiteszi a főképernyőre iPhone-on
  },

  // Így fog kinézni, ha megosztod Facebookon/LinkedInen
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://coachbase.hu",
    title: "CoachBase | A Te Digitális Bázisod",
    description: "Automatizált ügyfélszerzés edzőknek. Több vendég, kevesebb adminisztráció.",
    siteName: "CoachBase",
    images: [
      {
        url: "/logo.png", // Ide érdemesebb egy 1200x630-as 'og-image.png'-t tenni később
        width: 1200,
        height: 630,
        alt: "CoachBase Logo",
      },
    ],
  },

  // Így fog kinézni Twitteren/X-en
  twitter: {
    card: "summary_large_image",
    title: "CoachBase | Weboldal Edzőknek",
    description: "Automatizáld a vállalkozásod és szerezz több vendéget.",
    images: ["/logo.png"], 
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <Analytics/>
      <body
        // Javítva: a sora.variable csak egyszer kell
        className={`${sora.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}