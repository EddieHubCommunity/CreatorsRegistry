import { ArrowUpIcon, WifiIcon } from "@heroicons/react/24/outline";
import prisma from "@/models/db";

import Items from "@/components/list/Items";
import REACH from "@/config/reach";

export default async function Page() {
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
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <Items
                  data={users.map((user) => ({
                    id: user.username,
                    image: user.image,
                    url: `/${user.username}`,
                    urlText: user.name,
                    description: user.bio,
                    badges: user.platforms.map((platform) => ({
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

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">{/* Your content */}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
