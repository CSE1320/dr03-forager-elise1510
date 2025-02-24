import { Geist, Geist_Mono, Nunito} from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitof = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitof.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
