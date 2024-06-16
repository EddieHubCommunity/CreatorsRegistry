import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";

import prisma from "@/models/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Alert from "@/components/Alert";
import Items from "@/components/list/Items";
import REACH from "@/config/reach";
import PLATFORMS from "@/config/platforms";
import Form from "./form";

export default async function Page() {
  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const platforms = await prisma.platform.findMany({
    where: { userId: session.user.id },
  });

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only">Your platforms</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Profile settings
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                {platforms.length === 0 && (
                  <Alert
                    type="warning"
                    message="Add atleast 1 social platform to appear in the results"
                  />
                )}
                <Items
                  data={platforms.map((platform) => ({
                    id: platform.id,
                    icon: platform.name,
                    url: `?id=${platform.id}`,
                    urlText: `${REACH().data[platform.reach].name} on ${
                      PLATFORMS().data[platform.name].display
                    } with ${REACH().data[platform.reach].group} (from $${
                      platform.price
                    })`,
                    description: platform.description,
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
                <Form data={platforms} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
