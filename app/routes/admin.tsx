import type { LoaderFunctionArgs } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import { requireUserSession } from "~/utils/session.server";

export default function Admin() {
  return (
    <div>
      This is admin
      <Outlet></Outlet>
    </div>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireUserSession(request);
  const userID = session?.data?.sessionKey?.userID;
  console.log("🚀 ~ loader ~ userID:", userID)
  return { true: true };
};
