import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";

import prisma from "@/models/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Form from "./form";
import Alert from "@/components/Alert";

export default async function Page() {
  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

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
              <div className="p-6">
                {user.id === user.username && (
                  <Alert
                    type="warning"
                    message="Customise your username to have a prettier unique url"
                  />
                )}
                <Form user={user} />
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
