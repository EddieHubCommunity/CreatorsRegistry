"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Cta({ children, url = "#" }) {
  return (
    <div className="outline outline-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {children}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={url}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={async () => await signIn()}
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
