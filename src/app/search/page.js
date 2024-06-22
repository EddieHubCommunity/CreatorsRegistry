import { ArrowUpIcon, WifiIcon } from "@heroicons/react/24/outline";
import prisma from "@/models/db";

import Items from "@/components/list/Items";
import REACH from "@/config/reach";
import Form from "./form";

export default async function Page({ searchParams }) {
  const query = {
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
    orderBy: [
      {
        [searchParams.sort ? searchParams.sort : "createdAt"]:
          searchParams.sortDirection ? searchParams.sortDirection : "desc",
      },
    ],
    skip: 0,
    take: 10,
  };

  if (searchParams) {
    if (searchParams.platform !== "") {
      query.where.platforms.some["name"] = {
        contains: searchParams.platform,
      };
    }
    if (searchParams.reach !== "") {
      query.where.platforms.some["reach"] = {
        contains: searchParams.reach,
      };
    }
  }

  const users = await prisma.user.findMany(query);

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
                    tags: user.tags?.split(","),
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
              <div className="p-6">
                <Form searchParams={searchParams} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
