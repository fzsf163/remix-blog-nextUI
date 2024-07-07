import type { ActionFunctionArgs } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import PrimaryNav from "~/components/AdminNav/primaryNav";

import { authenticator } from "~/utils/auth.server";
import { requireUserSession } from "~/utils/session.server";

export default function Admin() {
  const { userID } = useLoaderData<typeof loader>();
  return (
    <div style={{fontFamily:"K2D"}}>
      <PrimaryNav></PrimaryNav>
      <Outlet context={userID}></Outlet>
    </div>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  const userID = session?.data?.sessionKey?.userID;
  return { userID: userID };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = await request.formData();
  const intent = formdata.get("intent");

  if (intent === "logout") {
    await authenticator.logout(request, { redirectTo: "/login" });
  }
  return null;
};
