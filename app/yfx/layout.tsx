import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yfx test",
  description: "create as first page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //  data-test="for data test"
  return (
    <>
      {children}
      <div>...tail from layout...</div>
    </>
  );
}
