import { useFormStatus } from "react-dom";

import { classNames } from "@/utils/classNames";

export default function Textarea({
  id,
  name,
  value,
  description,
  error,
  rows = 3,
}) {
  const { pending } = useFormStatus();

  if (!name) {
    name = id;
  }
  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2">
        <textarea
          name={id}
          id={id}
          disabled={pending}
          rows={rows}
          className={classNames(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            error
              ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              : "ring-gray-300 focus-within:ring-indigo-600",
            pending && "bg-gray-300"
          )}
          aria-describedby={`${id}-error`}
          defaultValue={value}
        />
      </div>
      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
