import {
  ArrowPathIcon,
  ArrowUpIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";

import prisma from "@/models/db";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Items from "@/components/list/Items";
import Cta from "@/components/Cta";
import REACH from "@/config/reach";

const featuresCampaigns = [
  {
    name: "Creator Ready",
    description:
      "No more contacting people who don't want to do collaborations. These people are ready to do paid collabs.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Clear Pricing",
    description:
      "Content Creators clearly show their pricing, so you know what you are getting and for how much.",
    icon: LockClosedIcon,
  },
  {
    name: "Find Content Creators FAST",
    description:
      "Filter for the right Content Creators by platforms, price, reach etc. Contact Creators directly.",
    icon: ArrowPathIcon,
  },
  {
    name: "Make your time and budget go further",
    description:
      "No need to search individual social platforms for people who maybe want to collab, you have them directly right here.",
    icon: FingerPrintIcon,
  },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  const users = await prisma.user.findMany({
    include: {
      platforms: {
        orderBy: {
          price: "asc",
        },
      },
    },
    where: {
      platforms: {
        some: {},
      },
    },
    orderBy: [{ createdAt: "desc" }],
    skip: 0,
    take: 6,
  });

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only">Page title</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Content Creators Directory
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              {!session && (
                <Cta>
                  Are you a Content Creator?
                  <br />
                  Want to get paid?
                </Cta>
              )}
              <div className="p-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Collab with the community and reach more people!
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Make YOUR campaign a success
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Finding Content Creators to collaborate with is difficult,
                    but we are here to make it more seamless.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {featuresCampaigns.map((feature) => (
                      <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              Recent Profiles
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <Items
                  data={users.map((user) => ({
                    id: user.username,
                    image: user.image,
                    url: `/${user.username}`,
                    urlText: user.name,
                    socials: user.platforms.map((platform) => ({
                      icon: platform.name,
                    })),
                    meta: [
                      // biggest reach
                      {
                        icon: WifiIcon,
                        text: `Reach ${
                          REACH().data[
                            REACH().sortByLargest(user.platforms)[0].reach
                          ].group
                        }`,
                      },
                      // lowest price
                      {
                        icon: ArrowUpIcon,
                        text: `From $${user.platforms[0].price}`,
                      },
                    ],
                  }))}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
