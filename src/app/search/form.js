"use client";

import { search } from "./action";
import { SubmitButton } from "@/components/forms/SubmitButton";
import Select from "@/components/forms/Select";
import PLATFORMS from "@/config/platforms";
import REACH from "@/config/reach";

export default function Form({ searchParams }) {
  return (
    <form action={search}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Search
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Filter the results
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Select
              name="sort"
              value={searchParams.sort}
              options={[
                {
                  display: "Created At",
                  value: "createdAt",
                },
                {
                  display: "Updated At",
                  value: "updatedAt",
                },
              ]}
            />

            <Select
              name="sortDirection"
              value={searchParams.sortDirection}
              options={[
                {
                  display: "Ascending",
                  value: "asc",
                },
                {
                  display: "Descending",
                  value: "desc",
                },
              ]}
            />

            <Select
              name="platform"
              value={searchParams.platform}
              options={PLATFORMS().select}
            />
            <Select
              name="reach"
              value={searchParams.reach}
              options={REACH().select}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <SubmitButton text="SEARCH" />
      </div>
    </form>
  );
}
