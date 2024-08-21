import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firmansyah Portfolio",
  description:
    "Firmansyah Portfolio - Personal Portfolio Website of Firmansyah",
  keywords: "Firmansyah, Portfolio, Personal Portfolio, Firmansyah Portfolio",
};

//flex min-h-screen flex-col items-center justify-between p-24 flex
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-statoshi">
        <main className="flex min-h-screen flex-col items-center justify-center py-24 xl:px-20 2xl:px-80">
          {children}
        </main>
      </body>
    </html>
  );
}
