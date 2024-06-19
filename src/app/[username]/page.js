import { redirect } from "next/navigation";
import {
  CurrencyDollarIcon,
  MegaphoneIcon,
  ScaleIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

import prisma from "@/models/db";
import Items from "@/components/list/Items";
import REACH from "@/config/reach";
import PLATFORMS from "@/config/platforms";
import Image from "next/image";

export default async function Page({ params }) {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
    include: {
      platforms: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only">My Profile</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Profile settings
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <header className="relative isolate">
                <div
                  className="absolute inset-0 -z-10 overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                    <div
                      className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                      style={{
                        clipPath:
                          "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
                </div>

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                  <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                    <div className="flex items-center gap-x-6">
                      <Image
                        src={user.image}
                        alt={user.name}
                        className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                        width={64}
                        height={64}
                      />
                      <h1>
                        <div className="text-sm leading-6 text-gray-500">
                          {user.username}
                        </div>
                        <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                          {user.name}
                        </div>
                      </h1>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <div className="p-6">
                <Items
                  data={user.platforms.map((platform) => ({
                    id: platform.id,
                    icon: platform.name,
                    url: platform.url,
                    urlText: `${REACH().data[platform.reach].name} on ${
                      PLATFORMS().data[platform.name].display
                    } with ${REACH().data[platform.reach].group} (from $${
                      platform.price
                    })`,
                    description: platform.description,
                    meta: [
                      {
                        icon: MegaphoneIcon,
                        text: REACH().data[platform.reach].name,
                      },
                      {
                        icon: ScaleIcon,
                        text: REACH().data[platform.reach].group,
                      },
                      {
                        icon: SignalIcon,
                        text: PLATFORMS().data[platform.name].display,
                      },
                      {
                        icon: CurrencyDollarIcon,
                        text: platform.price,
                      },
                    ],
                  }))}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              User details
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">{user.bio}</div>
              <a href={user.website} className="p-6">
                {user.website}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
