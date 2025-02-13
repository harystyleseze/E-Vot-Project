import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/nav/Navbar";
import ClientProvider from "@/components/providers/ClientProviders";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Decentralized voting",
    default: "E-Vote",
  },
  openGraph: {
    description:
      "The decentralized voting platform on the internet to make your voice count!",
    url: process.env.NEXT_PUBLIC_URL!,
    siteName: "E-VOTE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} bg-[#F5F5F5] dark:bg-slate-900 dark:text-slate-100 px-4`}
      >
        <ClientProvider>
          <main className="flex flex-col">
            <MaxWidthWrapper className="pt-2 md:pt-0">
              <Navbar />
            </MaxWidthWrapper>
            <MaxWidthWrapper className="">{children}</MaxWidthWrapper>
          </main>
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
