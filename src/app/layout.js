import { Inter } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Content Creators",
  description: "Directory for Content Creators to get paid sponsorship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={classNames("h-full", inter.className)}>{children}</body>
    </html>
  );
}
