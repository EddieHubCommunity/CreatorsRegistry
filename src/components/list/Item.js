import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Badge from "@/components/Badge";
import socialIcon from "@/config/socialIcon";

export default function Item({ data }) {
  return (
    <li className="relative hover:bg-gray-50 gap-y-4 py-5 gap-x-6">
      <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="flex min-w-0 gap-x-4">
          {data.image && (
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={data.image}
              alt={`${data.urlText} avatar`}
              width={48}
              height={48}
            />
          )}
          {data.icon && (
            <FontAwesomeIcon
              icon={socialIcon(data.icon).icon}
              className="h-12 w-12 flex-none rounded-full bg-gray-50 p-2"
              style={{ height: 50, width: 50 }}
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
            <dt className="sr-only">Social platforms</dt>
            {data.socials &&
              data.socials.map((badge, key) => {
                const { icon, color } = socialIcon(badge.icon);
                return (
                  <dd key={key}>
                    <FontAwesomeIcon
                      icon={icon}
                      label={badge.icon}
                      className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                      style={{ height: 25, width: 25, color: color }}
                    />
                  </dd>
                );
              })}
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400 hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </dl>
      </div>
      {data.meta && (
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 justify-center">
          {data.meta.map((item, idx) => (
            <div
              className="mt-2 flex items-center text-sm text-gray-500"
              key={idx}
            >
              <item.icon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {item.text}
            </div>
          ))}
        </div>
      )}
      {data.tags && (
        <ul className="flex flex-row gap-2 justify-center pt-2">
          {data.tags.map((tag) => (
            <li key={tag}>
              <Badge text={tag} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
