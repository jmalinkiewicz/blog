import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Nav from "../ui/headers/nav";
import Footer from "../ui/footers/footer";
import Providers from "../providers";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jmalinkiewicz blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} leading-[1.2] bg-honey-50 min-h-screen flex flex-col dark:bg-shark-950 dark:text-white`}
      >
        <Providers>
          <header>
            <Nav />
          </header>
          <div className="flex-grow flex justify-center items-stretch gap-7">
            {children}
          </div>
          <div className="lg:mt-16">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}