import Header from "../components/common/header";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatDisplay.className} py-8 px-12 max-w-7xl mx-auto bg-background-primary text-content-body antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
