"use client";

import { useFormState } from "react-dom";

import { profileUpdate } from "./action";
import { SubmitButton } from "@/components/forms/SubmitButton";
import Input from "@/components/forms/Input";
import Alert from "@/components/Alert";
import Textarea from "@/components/forms/Textarea";

const initialState = {
  success: undefined,
  errors: undefined,
};

export default function Form({ user }) {
  const [state, formAction] = useFormState(profileUpdate, initialState);

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
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input
              id="username"
              name="Your unique username"
              prepend="creators-registry.eddiehubcommunity.org/"
              error={state?.errors?.username}
              value={user.username}
            />

            <Input
              id="preferredEmail"
              name="Preferred email"
              prepend={`${user.email} / `}
              error={state?.errors?.preferredEmail}
              value={user.preferredEmail}
            />

            <Input
              id="website"
              name="Your website"
              error={state?.errors?.website}
              value={user.website}
            />

            <Input
              id="tags"
              name="Tag topics"
              error={state?.errors?.tags}
              value={user.tags}
            />

            <Textarea
              id="bio"
              name="Your Bio"
              error={state?.errors?.bio}
              value={user.bio}
              description="Write a few sentences about yourself."
            />
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
        <SubmitButton text="SAVE" />
      </div>
    </form>
  );
}
