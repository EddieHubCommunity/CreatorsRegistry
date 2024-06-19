import { classNames } from "@/utils/classNames";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

export default function Alert({
  type = "info",
  message = "An error occured, please try again",
  details = [],
}) {
  return (
    <div
      className={classNames(
        "border-l-4 p-4",
        type === "success" && "border-green-400 bg-green-50",
        type === "info" && "border-blue-400 bg-blue-50",
        type === "warning" && "border-yellow-400 bg-yellow-50",
        type === "error" && "border-red-400 bg-red-50"
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {type === "success" && (
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          )}
          {type === "info" && (
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          )}
          {type === "warning" && (
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          )}
          {type === "error" && (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <h3
            className={classNames(
              "text-sm font-medium",
              type === "success" && "text-green-800",
              type === "info" && "text-blue-800",
              type === "warning" && "text-yellow-800",
              type === "error" && "text-red-800"
            )}
          >
            {message}
          </h3>
          <div
            className={classNames(
              "mt-2 text-sm",

              type === "success" && "text-green-8700",
              type === "info" && "text-blue-700",
              type === "warning" && "text-yellow-700",
              type === "error" && "text-red-700"
            )}
          >
            {!!details && (
              <ul role="list" className="list-disc space-y-1 pl-5">
                {details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
