"use client";

import { useFormState } from "react-dom";

import { platformUpdate } from "./action";
import { SubmitButton } from "@/components/forms/SubmitButton";
import Input from "@/components/forms/Input";
import Alert from "@/components/Alert";
import Select from "@/components/forms/Select";
import platforms from "@/config/platforms";
import reach from "@/config/reach";

const initialState = {
  success: undefined,
  errors: undefined,
};

export default function Form({ platform }) {
  const [state, formAction] = useFormState(platformUpdate, initialState);

  return (
    <form action={formAction}>
      {state.success && <Alert type="success" message="Saved" />}
      {state.errors && (
        <Alert
          type="error"
          message="Error"
          details={Object.entries(state.errors).map(
            (item) => `${item[0]}: ${item[1].join(", ")}`
          )}
        />
      )}
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Your platform link
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Select
              name="name"
              error={state?.errors?.name}
              options={platforms().select}
              value={platform.name}
            />

            <Select
              name="reach"
              error={state?.errors?.reach}
              options={reach().select}
              value={platform.reach}
            />

            <Input
              name="price"
              error={state?.errors?.price}
              value={platform.price}
            />

            <Input name="url" error={state?.errors?.url} value={platform.url} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <SubmitButton formAction={platformUpdate} />
      </div>
    </form>
  );
}
