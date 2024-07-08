import type { ActionFunctionArgs } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import PrimaryNav from "~/components/AdminNav/primaryNav";

import { authenticator } from "~/utils/auth.server";
import { requireUserSession } from "~/utils/session.server";

export default function Admin() {
  return (
    <div style={{ fontFamily: "K2D" }}>
      <PrimaryNav></PrimaryNav>
      <Outlet></Outlet>
    </div>
  );
}


