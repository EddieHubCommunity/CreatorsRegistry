import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { SocialIcon } from "react-social-icons";

export default function Item({ data }) {
  return (
    <li
      key={data.id}
      className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
    >
      <div className="flex min-w-0 gap-x-4">
        {data.image && (
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={data.image}
            alt=""
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
            <a href={`/${data.url}`}>
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {data.urlText}
            </a>
          </p>
          <p className="mt-1 flex text-xs leading-5 text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{data.role}</p>
          {data.lastSeen ? (
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Last seen{" "}
              <time dateTime={data.lastSeenDateTime}>{data.lastSeen}</time>
            </p>
          ) : (
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Online</p>
            </div>
          )}
        </div>
        <ChevronRightIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}
