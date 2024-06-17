import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Item({ data }) {
  return (
    <li
      key={data.id}
      className="relative hover:bg-gray-50 gap-y-4 py-5 gap-x-6"
    >
      <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="flex min-w-0 gap-x-4">
          {data.image && (
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={data.image}
              alt={data.description}
            />
          )}
          {data.icon && (
            <SocialIcon
              network={data.icon}
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
            />
          )}
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <Link href={data.url}>
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {data.urlText}
              </Link>
            </p>
            <p className="mt-1 flex text-xs leading-5 text-gray-500">
              {data.description}
            </p>
          </div>
        </div>
        <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
          <div className="flex -space-x-0.5">
            <dt className="sr-only">Commenters</dt>
            {data.badges &&
              data.badges.map((badge, key) => (
                <dd key={key}>
                  <SocialIcon
                    network={badge.icon}
                    className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                  />
                </dd>
              ))}
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400 hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </dl>
      </div>
      {data.meta && (
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 justify-center">
          {data.meta.map((item) => (
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <item.icon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {item.text}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
