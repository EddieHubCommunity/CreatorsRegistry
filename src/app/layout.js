import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import "./globals.css";
import prisma from "@/models/db";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { classNames } from "@/utils/classNames";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Content Creators",
  description: "Directory for Content Creators to get paid sponsorship",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  let user = {};

  if (session) {
    user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        platforms: true,
      },
    });
  }

  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={classNames("h-full", inter.className)}>
        <div className="min-h-full">
          <Header session={session} user={user} />
          <main className="-mt-24 pb-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
