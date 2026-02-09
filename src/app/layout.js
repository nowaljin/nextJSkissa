import { Geist, Geist_Mono } from "next/font/google";
import { montserrat } from "@/utils/fonts";
import "@/styles/common.css";
import "@/styles/access.css";
import "@/styles/index.css";
import "@/styles/menu.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kissa — コーヒーとカフェメニュー",
  description: "Kissaの公式サイト。メニュー、アクセス、ショップ情報を掲載しています。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={montserrat.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
