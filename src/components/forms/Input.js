import { useFormStatus } from "react-dom";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import { classNames } from "@/utils/classNames";

export default function Input({ name, value, error, prepend }) {
  const { pending } = useFormStatus();

  const input = (
    <input
      type="text"
      disabled={pending}
      name={name}
      id={name}
      className={classNames(
        "block w-full rounded-md border-0 sm:text-sm sm:leading-6",
        error
          ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
          : "ring-gray-300 focus-within:ring-indigo-600",
        pending && "bg-gray-300",
        prepend
          ? "flex-1 bg-transparent pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
          : "w-full rounded-md py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset"
      )}
      aria-invalid="true"
      aria-describedby={`${name}-error`}
      defaultValue={value}
    />
  );

  const prependInput = (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
        {prepend}
      </span>
      {input}
    </div>
  );

  return (
    <div className="col-span-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {prepend ? prependInput : input}
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
